import * as utils from '../utils';
import { Expression } from './expression';

export class Binding {
    constructor(scope, text, locals) {
        this.scope = scope;
        this.text = text;
        this.locals = locals;
        // is true, binding text is a expression
        this.isExp = false;
        // if true, binding text is a logical expression
        this.logical = false;
        // if true, binding text is a assignment expression
        this.assignment = false;
        // handler to update view from model value
        this.automation = null;
        this.value = null;
        this.oldValue = null;
        this.changed = false;
        this.segments = [];
        this.expressions = [];
    }

    createExpression(text) {
        var exp = new Expression(text);
        this.expressions.push(exp);
        return exp;
    }

    compile() {
        if (this.logical || this.assignment) {
            this.isExp = true;
        }

        if (this.isExp) {
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
        if (this.assignment || this.logical) {
            return;
        }

        this.detect();

        this.expressions.forEach(exp => {
            exp.watch(this.scope, () => {
                this.detect();
                this.patch();
            }, this.locals);
        });
    }

    detect() {
        if (this.assignment || this.logical) {
            return;
        }
        
        var newValue = this.compute();

        if (this.value != newValue) {
            this.changed = true;
            this.oldValue = this.value;
            this.value = newValue;
        }
    }

    // get value
    compute(locals) {
        locals = utils.merge(this.locals, locals);

        if (this.isExp) {
            return this.expressions[0].compute(this.scope, locals);
        }

        return this.segments.reduce((prev, cur) => {
            if (utils.isString(cur)) {
                return prev + cur;
            }
            // it is a expression
            return prev + (cur.compute(this.scope, locals) || '');
        }, '');
    }

    // set value
    assign(value, locals) {
        locals = utils.merge(this.locals, locals);

        if (this.isExp) {
            this.expressions[0].assign(this.scope, value, locals);
        } else {
            throw new Error(this.text + ' is not valid expression');
        }
    }

    registerAutomation(automation) {
        this.automation = automation;
    }

    unregisterAutomation(automation) {
        if (this.automation === automation) {
            this.automation = null;
        }
    }

    // modify view according to model
    patch() {
        if (this.changed && this.automation != null) {
            this.changed = false;
            this.automation.call(this, this.value, this.oldValue);
        }
    }

    destroy() {
        this.expressions.forEach(exp => {
            exp.destroy();
        });
    }
}