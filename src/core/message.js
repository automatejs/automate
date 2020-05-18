import * as utils from '../utils';

export class Message {
    constructor() {
        this.handlers = [];
    }

    on(fn) {
        this.handlers.push(fn);
    }

    off(fn) {
        for (var i = 0; i < this.handlers.length; i++) {
            if (this.handlers[i] === fn) {
                this.handlers.splice(i, 1);
            }
        }
    }

    fire(args, scope) {
        var returnValue;
        scope = scope || this;
        for (var i = 0; i < this.handlers.length; i++) {
            if (utils.isFunction(this.handlers[i])) {
                returnValue = this.handlers[i].call(scope, args);
            }
        }
        return returnValue;
    }
}

function isMessage(obj) {
    return obj instanceof Message;
}

export { isMessage }