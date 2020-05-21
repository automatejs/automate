import * as utils from '../utils';
import { Evaluator, Analyser } from '../exp';
import { Watcher } from './watcher';
import { Delayer } from './delayer';

class Listener {
    constructor(exp, handler, value) {
        this.exp = exp;
        this.handler = handler;
        this.value = value;
        this.newValue = value;
        this.valueChanged = false;
        this.collectionChanged = false;
    }

    setNewValue(value) {
        this.newValue = value;
        this.valueChanged = true;
    }

    setCollectionChanged(value) {
        this.collectionChanged = value;
    }

    hasChange() {
        return this.valueChanged || this.collectionChanged;
    }

    notify(scope) {
        var oldValue = this.value,
            newValue = this.newValue,
            collectionChanged = this.collectionChanged;

        this.value = this.newValue;
        this.collectionChanged = false;

        this.handler.call(scope, {
            oldValue: oldValue,
            newValue: newValue,
            collectionChanged: collectionChanged
        });
    }
}

export class Observer {
    constructor(scope) {
        this.listeners = [];
        this.scope = scope;
        this.watcher = new Watcher();
        this.delayer = new Delayer(this.notify);
    }

    createListener(evaluator, exp, handler) {
        var value = evaluator.evaluate(exp);
        var listener = new Listener(exp, handler, value);
        this.listeners.push(listener);
        return listener;
    }

    notify() {
        this.listeners.forEach(listener => {
            if(listener.hasChange()) {
                listener.notify(this.scope);
            }
        });
    }

    notifyChange(listener, newValue) {
        if (newValue) {
            listener.setNewValue(newValue);
        } else {
            listener.setCollectionChanged(true);
        }
        this.delayer.execute(this);
    }

    watch(exp, handler, locals) {
        var self = this;
        var analyser = new Analyser(exp, locals);
        var evaluator =  new Evaluator(this.scope, locals, {
            allowNull: true
        });
        var listener = this.createListener(evaluator, exp, handler);

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

                item.unwatch = self.watcher.watch(target, key, function (args) {
                    unwatchAccessors(item.children);
                    watchAccessors(item.children, args.data.newValue);
                    self.notifyChange(listener, evaluator.evaluate(exp));
                });

                watchAccessors(item.children, target[key]);
            });
        }

        analyser.analyse();
        watchAccessors(analyser.accessors, this.scope);
        locals && watchAccessors(analyser.localAccessors, locals);

        return function () {
            unwatchAccessors(analyser.accessors);
            locals && unwatchAccessors(analyser.localAccessors);
        };
    }

    watchCollection(exp, handler, locals) {
        var self = this,
            evaluator =  new Evaluator(this.scope, locals, {
                allowNull: true
            });
        var unwatchProps = watchProps();
        var unwatchExp = this.watch(exp, () => {
            if (unwatchProps != null) {
                unwatchProps.call(this);
            }
            unwatchProps = watchProps();
            handler.apply(this, arguments);
        }, locals);
        var listener = this.createListener(evaluator, exp, handler);

        function watchProps() {
            var collection = evaluator.evaluate(exp);

            if (utils.isObject(collection) || utils.isArray(collection)) {
                return self.watcher.watch(collection, '*', function () {
                    self.notifyChange(listener);
                });
            }
        }

        return function () {
            unwatchExp.call(this);
            unwatchProps && unwatchProps.call(this);
        };
    }

    destroy() {
        this.delayer.destroy();
        this.watcher.destroy();
        this.scope = null;
        this.listeners.length = 0;
    }
}