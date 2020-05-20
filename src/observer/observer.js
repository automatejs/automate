import { events, getTarget } from '../core';
import * as utils from '../utils';
import { Watcher } from './watcher';
import { Evaluator, Analyser } from '../exp';

export class Observer {
    constructor() {
        this.onPropChanging = args => {
            this.handlePropChanging(args);
        };

        this.onPropChanged = args => {
            this.handlePropChanged(args);
        };

        this.listeners = [];
        this.validators = [];
        this.init();
    }

    init() {
        events.propChanging.on(this.onPropChanging);
        events.propChanged.on(this.onPropChanged);
    }

    handlePropChanging(args) {
        var watcher = this.getWatcher(this.validators, args.target);

        if (watcher != null) {
            watcher.fireKey(args.key, args);
        }
    }

    handlePropChanged(args) {
        var watcher = this.getWatcher(this.listeners, args.target);

        if (watcher != null) {
            watcher.fireKey(args.key, args);
            watcher.fireKey('*', args);
        }
    }

    getWatcher(watchers, target) {
        var watcher, filters = watchers.filter(item => {
            return item.target === target;
        });

        if (filters.length > 0) {
            watcher = filters[0];
        }

        return watcher;
    }

    createWatcher(watchers, target) {
        var watcher = new Watcher(target);
        watchers.push(watcher);
        return watcher;
    }

    getOrCreateWatcher(watchers, target) {
        var watcher = this.getWatcher(watchers, target);

        if (watcher == null) {
            watcher = this.createWatcher(watchers, target);
        }

        return watcher;
    }

    watch(target, key, action) {
        var watcher = this.getOrCreateWatcher(this.listeners, getTarget(target));

        watcher.registerKey(key, action);

        return function () {
            watcher.unregisterKey(key, action);
        };
    }

    validate(target, key, action) {
        var watcher = this.getOrCreateWatcher(this.validators, getTarget(target));

        watcher.registerKey(key, action);

        return function () {
            watcher.unregisterKey(key, action);
        };
    }

    watchExp(scope, exp, handler, locals) {
        var self = this;
        var analyser = new Analyser(exp, locals);
        var evaluator = new Evaluator(scope, {}, {
            allowNull: true
        });

        function unwatchAccessors(accessors) {
            utils.forEach(accessors, function (item) {
                if (utils.isFunction(item.unwatch)) {
                    item.unwatch.call(this);
                    item.unwatch = null;
                }
                unwatchAccessors(item.children);
            });
        }

        function watchAccessors(accessors, target) {
            if (!utils.isObject(target)) {
                return;
            }

            utils.forEach(accessors, function (item, key) {
                if (item.exp) {
                    key = evaluator.evaluate(key);
                }

                item.unwatch = self.watch(target, key, function (args) {
                    unwatchAccessors(item.children);
                    watchAccessors(item.children, args.data.newValue);
                    handler.call(this, {
                        newValue: evaluator.evaluate(exp)
                    });
                });

                watchAccessors(item.children, target[key]);
            });
        }

        analyser.analyse();
        watchAccessors(analyser.accessors, scope);
        locals && watchAccessors(analyser.localAccessors, locals);

        return function () {
            unwatchAccessors(analyser.accessors);
            locals && unwatchAccessors(analyser.localAccessors);
        };
    }

    watchCollection(scope, exp, handler, locals) {
        var self = this, evaluator = new Evaluator(scope, {}, {
            allowNull: true
        });
        var unwatchProps = watchProps();
        var unwatchExp = this.watchExp(scope, exp, () => {
            if (unwatchProps != null) {
                unwatchProps.call(this);
            }
            unwatchProps = watchProps();
            handler.apply(this, arguments);
        }, locals);

        function watchProps() {
            var collection = evaluator.evaluate(exp);

            if (utils.isObject(collection) || utils.isArray(collection)) {
                return self.watch(collection, '*', handler);
            }
        }

        return function () {
            unwatchExp.call(this);
            unwatchProps && unwatchProps.call(this);
        };
    }

    destroy() {
        this.listeners.length = 0;
        this.validators.length = 0;

        events.propChanging.off(this.onPropChanging);
        events.propChanged.off(this.onPropChanged);
    }
}