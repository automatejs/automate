
export class Expression {
    constructor(text) {
        this.text = text;
    }

    // get value
    compute(evaluator, locals) {
        return evaluator.evaluate(this.text, locals);
    }

    // set value
    assign(evaluator, value, locals) {
        evaluator.assign(this.text, value, locals);
    }

    watch(scope, handler, locals) {
        return scope.$watch(this.text, handler, locals);
    }

    destroy() {

    }
}