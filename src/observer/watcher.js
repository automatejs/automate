export class Watcher {
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