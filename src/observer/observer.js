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
        this.scope = scope;
        this.accessors = {};
        this.listeners = [];
        this.watcher = new Watcher();
        this.analyser = new Analyser(scope.$parser);
        this.delayer = new Delayer(this.notify, 16);
        this.evaluator =  new Evaluator(this.scope, {
            allowNull: true
        });
    }

    createListener(exp, handler, value) {
        var listener = new Listener(exp, handler, value);
        this.listeners.push(listener);
        return listener;
    }

    removeListener(listener) {
        var index = this.listeners.indexOf(listener);
        if(index !== -1) {
            this.listeners.splice(index, 1);
        }
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

    getAccessor(exp) {
        var result = this.accessors[exp];

        if(!result) {
            result = this.analyser.analyse(exp);
            this.accessors[exp] = result;
        }

        return utils.copy(true, result);
    }

    watch(exp, handler, locals) {
        var self = this;
        var accessor = this.getAccessor(exp);
        var evaluator =  this.evaluator;
        var listener = this.createListener(exp, handler, evaluator.evaluate(exp, locals));

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
                var values = target;

                if (item.exp) {
                    key = evaluator.evaluate(key, locals);
                }

                if(values === self.scope && locals && locals[key]) {
                    values = locals;
                }

                item.unwatch = self.watcher.watch(values, key, function (args) {
                    unwatchAccessors(item.children);
                    watchAccessors(item.children, args.data.newValue);
                    self.notifyChange(listener, evaluator.evaluate(exp, locals));
                });

                watchAccessors(item.children, values[key]);
            });
        }

        watchAccessors(accessor, this.scope);

        return function () {
            unwatchAccessors(accessor);
            self.removeListener(listener);
        };
    }

    watchCollection(exp, handler, locals) {
        var self = this,
            evaluator =  this.evaluator;
        var unwatchProps = watchProps();
        var unwatchExp = this.watch(exp, () => {
            if (unwatchProps != null) {
                unwatchProps.call(this);
            }
            unwatchProps = watchProps();
            handler.apply(this, arguments);
        }, locals);
        var listener = this.createListener(exp, handler, evaluator.evaluate(exp, locals));

        function watchProps() {
            var collection = evaluator.evaluate(exp, locals);

            if (utils.isObject(collection) || utils.isArray(collection)) {
                return self.watcher.watch(collection, '*', function () {
                    self.notifyChange(listener);
                });
            }
        }

        return function () {
            unwatchExp.call(this);
            unwatchProps && unwatchProps.call(this);
            self.removeListener(listener);
        };
    }

    destroy() {
        this.delayer.destroy();
        this.watcher.destroy();
        this.scope = null;
        this.listeners.length = 0;
    }
}