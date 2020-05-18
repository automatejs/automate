export class Delayer {
    constructor(handler, timeout) {
        this.handler = handler;
        this.timeout = timeout;
        this.delayId = null;
    }

    execute(scope) {
        if(this.delayId != null){
            return;
        }

        this.delayId = setTimeout(() => {
            this.delayId = null;
            this.handler.call(scope);
        }, this.timeout);
    }

    destroy() {
        if (this.delayId != null) {
            clearTimeout(this.delayId);
        }
    }
}