import { Evaluator } from '../exp';

export class Expression {
    constructor(text) {
        this.text = text;
    }

    // get value
    compute(scope, locals) {
        var evaluator = new Evaluator(scope, locals);
        return evaluator.evaluate(this.text);
    }

    // set value
    assign(scope, value, locals) {
        var evaluator = new Evaluator(scope, locals, {
            assignInterceptor(target, key) {
                target.toProxy()[key] = value;
            }
        });
        evaluator.assign(this.text, value);
    }

    watch(scope, handler, locals) {
        return scope.$watch(this.text, handler, locals);
    }

    destroy() {

    }
}