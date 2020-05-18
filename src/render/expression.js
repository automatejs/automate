import * as utils from '../utils';
import { Evaluator } from '../exp';

export class Expression {
    constructor(scope, text, locals) {
        this.scope = scope;
        this.text = text;
        this.locals = locals;
    }

    mergeLocals(locals) {
        return utils.merge({}, this.locals, locals);
    }

    // get value
    compute(locals) {
        var evaluator = new Evaluator(this.scope, this.mergeLocals(locals));
        return evaluator.evaluate(this.text);
    }

    // set value
    assign(value, locals) {
        var evaluator = new Evaluator(this.scope, this.mergeLocals(locals), {
            assignInterceptor: function (target, key) {
                target.delegate(e => {
                    e[key] = value;
                });
            }
        });
        evaluator.evaluate(this.text, value);
    }

    watch(handler) {
        return this.scope.$watchExp(this.text, handler);
    }

    destroy() {

    }
}