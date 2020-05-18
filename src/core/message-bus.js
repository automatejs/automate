import { Message } from './message';

export class MessageBus {
    constructor() {
        this.messages = {};
    }

    get(e) {
        if (!this.messages[e]) {
            this.messages[e] = new Message();
        }
        return this.messages[e];
    }

    on(e, fn) {
        this.get(e).on(fn);
    }

    off(e, fn) {
        this.get(e).off(fn);
    }

    fire(e, args, scope) {
        return this.get(e).fire(args, scope);
    }
}