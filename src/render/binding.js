import * as utils from '../utils';
import { Evaluator } from '../exp';
import { Expression } from './expression';

export class Binding {
    constructor(scope, text, locals) {
        this.scope = scope;
        this.text = text;
        this.locals = locals;
        // identify text is a expression
        this.expressed = false;
        // identity it is a event binding
        this.messaged = false;
        // if true, assign value to expression
        this.assigned = false;
        // handler to update view from model value
        this.automation = null;
        this.value = null;
        this.changed = false;
        this.segments = [];
        this.expressions = [];
        this.evaluator = new Evaluator(this.scope, {
            assignInterceptor(target, key) {
                target.toProxy()[key] = value;
            }
        });
    }

    createExpression(text) {
        var exp = new Expression(text);
        this.expressions.push(exp);
        return exp;
    }

    compile() {
        if(this.messaged || this.assigned) {
            this.expressed = true;
        }

        if (this.expressed) {
            this.createExpression(this.text);
        }
        else {
            var pattern = /{{([^}]*)}}/g;
            var lastIndex = pattern.lastIndex;
            var segment, match = pattern.exec(this.text);

            while (match != null) {
                if (match.index > lastIndex) {
                    segment = this.text.substring(lastIndex, match.index);
                    this.segments.push(segment);
                }

                this.segments.push(this.createExpression(match[1]));

                lastIndex = pattern.lastIndex;
                match = pattern.exec(this.text);
            }

            if (this.text.length > lastIndex) {
                segment = this.text.substring(lastIndex);
                this.segments.push(segment);
            }
        }
    }

    link() {
        if(this.assigned || this.messaged) {
            return;
        }

        this.detect();

        this.expressions.forEach(exp => {
           exp.watch(this.scope,() => {
                this.detect();
                this.patch();
            }, this.locals);
        });
    }

    detect() {
        var newValue = this.compute();

        if(this.value != newValue) {
            this.changed = true;
            this.value = newValue;
        }
    }

    // get value
    compute(locals) {
        locals = utils.merge(this.locals, locals);

        if(this.expressed) {
            return this.expressions[0].compute(this.evaluator, locals);
        }

        return this.segments.reduce((prev, cur) => {
            if(utils.isString(cur)) {
                return prev + cur;
            }
            // it is a expression
            return prev + cur.compute(this.scope, locals);
        }, '');
    }

    // set value
    assign(value, locals) {
        locals = utils.merge(this.locals, locals);

        if (this.expressed) {
            this.expressions[0].assign(this.evaluator, value, locals);
        } else {
            throw new Error(this.text + ' is not valid expression');
        }
    }

    registerAutomation(automation) {
        this.automation = automation;
    }

    unregisterAutomation(automation) {
        if(this.automation === automation){
            this.automation = null;
        }
    }

    // modify view according to model
    patch() {
        if(this.changed && this.automation != null) {
            this.changed = false;
            this.automation.call(this, this.value);
        }
    }

    destroy() {

    }
}