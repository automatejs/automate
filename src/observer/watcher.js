import { events } from './events';
import { getTarget } from './proxy';

class ObjectListener {
    constructor(target) {
        this.target = target;
        this.keys = {};
    }

    getHandlers(key) {
        if (!this.keys[key]) {
            this.keys[key] = [];
        }

        return this.keys[key];
    }

    registerKey(key, handler) {
        var handlers = this.getHandlers(key);
        handlers.push(handler);
    }

    unregisterKey(key, handler) {
        var handlers = this.getHandlers(key);

        if (handler == null) {
            handlers.length = 0;
        }
        else {
            var index = handlers.indexOf(handler);

            if (index !== -1) {
                handlers.splice(index, 1);
            }
        }
    }

    fireKey(key, args, self) {
        var handlers = this.getHandlers(key);
        handlers.forEach(handler => {
            handler.call(self, args);
        });
    }
}

export class Watcher {
    constructor() {
        this.onPropChanging = e => {
            this.handlePropChanging(e.data);
        };

        this.onPropChanged = e => {
            this.handlePropChanged(e.data);
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
        var listener = this.getListener(this.validators, args.target);

        if (listener != null) {
            listener.fireKey(args.key, args);
        }
    }

    handlePropChanged(args) {
        var listener = this.getListener(this.listeners, args.target);

        if (listener != null) {
            listener.fireKey(args.key, args);
            listener.fireKey('*', args);
        }
    }

    getListener(listeners, target) {
        var listener, filters = listeners.filter(item => {
            return item.target === target;
        });

        if (filters.length > 0) {
            listener = filters[0];
        }

        return listener;
    }

    createListener(listeners, target) {
        var listener = new ObjectListener(target);
        listeners.push(listener);
        return listener;
    }

    getOrCreateListener(listeners, target) {
        var listener = this.getListener(listeners, target);

        if (listener == null) {
            listener = this.createListener(listeners, target);
        }

        return listener;
    }

    watch(target, key, action) {
        var listener = this.getOrCreateListener(this.listeners, getTarget(target));

        listener.registerKey(key, action);

        return function () {
            listener.unregisterKey(key, action);
        };
    }

    validate(target, key, action) {
        var listener = this.getOrCreateListener(this.validators, getTarget(target));

        listener.registerKey(key, action);

        return function () {
            listener.unregisterKey(key, action);
        };
    }

    destroy() {
        this.listeners.length = 0;
        this.validators.length = 0;

        events.propChanging.off(this.onPropChanging);
        events.propChanged.off(this.onPropChanged);
    }
}