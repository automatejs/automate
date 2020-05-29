
export class Expression {
    constructor(text) {
        this.text = text;
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
        return scope.$watch(this.text, handler, locals);
    }

    destroy() {

    }
}