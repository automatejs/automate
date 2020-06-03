export class Message {
    constructor() {
        this.data = {};
        this.handlers = [];
    }

    on(fn) {
        var index = this.handlers.indexOf(fn);

        // not found
        if(index === -1){
            this.handlers.push(fn);
        }
        else {
            throw new Error('can not register same event handler more than once');
        }

        return () => this.off(fn);
    }

    off(fn) {
        var index = this.handlers.indexOf(fn);

        if (index !== -1) {
            this.handlers.splice(index, 1);
        }
    }

    fire(data, scope) {
        scope = scope || this;
        // attach event data
        this.data = data || {};

        this.handlers.forEach(handler => handler.call(scope, this));
    }
}