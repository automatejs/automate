export class Expression {
    constructor(text) {
        this.text = text;
        this.program = null;
        this.unwatch = null;
        this.hasTranslation = false;
    }

    // get value
    compute(scope, locals) {
        return scope.$eval(this.text, locals);
    }

    // set value
    assign(scope, value, locals) {
        scope.$assign(this.text, value, locals);
    }

    watch(scope, handler, locals) {
        this.unwatch = scope.$watch(this.text, handler, locals);
    }

    destroy() {
        if(this.unwatch != null) {
            this.unwatch();
        }
    }
}