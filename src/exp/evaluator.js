import * as utils from '../utils';
import { AST, NullExpressionNode } from './model';
import { parseExp } from './exp-api';
import { ExpBuilder } from './exp-builder';

export class Evaluator {
    constructor(scope, options) {
        this.scope = scope;
        this.options = utils.merge({
            allowNull: false,
            assignInterceptor: null
        }, options);
        this.program = null;
        this.locals = null;
        this.buffer = {};
        this.builder = new ExpBuilder();
    }

    parse(exp) {
        var program = this.buffer[exp];
        if (!program) {
            program = parseExp(exp);
            this.buffer[exp] = program;
        }
        return program;
    }

    // get value from expression
    evaluate(exp, locals) {
        return this.evaluateProgram(this.parse(exp), locals);
    }

    evaluateProgram(program, locals) {
        var result;

        this.program = program;
        this.locals = locals;

        this.program.childNodes.forEach(child => {
            result = this.evaluateNode(child);
        });

        if (result && result.$null) {
            result = null;
        }

        return result;
    }

    // set value to expression
    assign(exp, value, locals) {
        return this.assignProgram(this.parse(exp), value, locals);
    }

    assignProgram(program, value, locals) {
        this.program = program;
        this.locals = locals;

        if (this.program.childNodes.length !== 1) {
            throw new Error(utils.format('{0} is not a valid assignment', exp));
        }

        var expression = this.program.childNodes[0];

        if (expression.childNodes.length > 1) {
            throw new Error(utils.format('{0} is not a valid assignment', exp));
        }

        var assignment = expression.childNodes[0];

        if (assignment.type === AST.MemberExpression) {
            var target = this.evaluateNode(assignment.object);

            if (target == null) {
                throw new Error(utils.format('{0} is null or undefined', this.builder.build(assignment.object)));
            }

            var key = this.evaluateNode(assignment.property, {
                propertyKey: !assignment.computed
            });

            if (key == null) {
                throw new Error(utils.format('{0} is null or undefined', this.builder.build(assignment.property)));
            }

            if (this.options.assignInterceptor == null) {
                target[key] = value;
            }
            else {
                this.options.assignInterceptor.call(this, target, key, value);
            }
        }
        else if (assignment.type === AST.Identifier) {
            var key = this.builder.build(assignment);

            if (this.options.assignInterceptor == null) {
                this.scope[key] = value;
            }
            else {
                this.options.assignInterceptor.call(this, this.scope, key, value);
            }
        }
        else {
            throw new Error(utils.format('{0} is not a valid assignment', exp));
        }
    }

    evaluateNode(node, context) {
        var result;

        switch (node.type) {
            case AST.ExpressionStatement:
                result = this.evaluateExpression(node);
                break;
            case AST.AssignmentExpression:
                result = this.evaluateAssignment(node);
                break;
            case AST.ConditionalExpression:
                result = this.evaluateCondition(node);
                break;
            case AST.LogicalExpression:
                result = this.evaluateLogic(node);
                break;
            case AST.BinaryExpression:
                result = this.evaluateBinary(node);
                break;
            case AST.UnaryExpression:
                result = this.evaluateUnary(node);
                break;
            case AST.CallExpression:
                result = this.evaluateCall(node);
                break;
            case AST.MemberExpression:
                result = this.evaluateMember(node, context);
                break;
            case AST.Identifier:
                result = this.evaluateIdentifier(node, context);
                break;
            case AST.Literal:
                result = this.evaluateLiteral(node);
                break;
            case AST.ArrayExpression:
                result = this.evaluateArray(node);
                break;
            case AST.Property:
                result = this.evaluateProperty(node);
                break;
            case AST.ObjectExpression:
                result = this.evaluateObject(node);
                break;
        }

        return result;
    }

    evaluateExpression(exp) {
        var result;

        exp.childNodes.forEach(child => {
            result = this.evaluateNode(child);
        });

        return result;
    }

    evaluateAssignment(assignment) {
        var target = this.evaluateNode(assignment.left, {
            assignmentLeft: true
        });
        var value = this.evaluateNode(assignment.right);

        if (this.options.assignInterceptor == null) {
            target.obj[target.prop] = value;
        }
        else {
            this.options.assignInterceptor.call(this, target.obj, target.prop, value);
        }
    }

    evaluateCondition(condition) {
        if (this.evaluateNode(condition.test)) {
            return this.evaluateNode(condition.alternate);
        }

        return this.evaluateNode(condition.consequent);
    }

    evaluateLogic(logic) {
        var result;
        var leftValue = this.evaluateNode(logic.left);
        var rightValue = this.evaluateNode(logic.right);

        switch (logic.operator) {
            case '&&':
                result = leftValue && rightValue;
                break;
            case '||':
                result = leftValue && rightValue;
                break;
        }

        return result;
    }

    evaluateBinary(binary) {
        var result;
        var leftValue = this.evaluateNode(binary.left);
        var rightValue = this.evaluateNode(binary.right);

        // '+', '-', '*', '/', '%', '<', '>', '<=', '>=', '==', '!=', '===', '!=='
        switch (binary.operator) {
            case '+':
                result = leftValue + rightValue;
                break;
            case '-':
                result = leftValue - rightValue;
                break;
            case '*':
                result = leftValue * rightValue;
                break;
            case '/':
                result = leftValue / rightValue;
                break;
            case '%':
                result = leftValue % rightValue;
                break;
            case '<':
                result = leftValue < rightValue;
                break;
            case '>':
                result = leftValue > rightValue;
                break;
            case '<=':
                result = leftValue <= rightValue;
                break;
            case '>=':
                result = leftValue >= rightValue;
                break;
            case '==':
                result = leftValue == rightValue;
                break;
            case '!=':
                result = leftValue != rightValue;
                break;
            case '===':
                result = leftValue === rightValue;
                break;
            case '!==':
                result = leftValue !== rightValue;
                break;
        }

        return result;
    }

    evaluateUnary(unary) {
        var result,
            value = this.evaluateNode(unary.arg);

        switch (unary.operator) {
            case '+':
                result = value;
                break;
            case '-':
                result = -value;
                break;
            case '!':
                result = !value;
                break;
        }

        return result;
    }

    evaluateCall(call) {
        var argValues = call.args.map(arg => {
            return this.evaluateNode(arg);
        });

        var context = this.evaluateNode(call.callee, {
            callee: true
        });

        if (call.filter) {
            var filter = this.scope.$getFilter(context.prop);

            if(filter == null) {
                throw new Error('Filter "' + context.prop + '" is not defined');
            }

            return filter.execute.apply(filter, argValues);
        }
        else {
            var fn = context.obj[context.prop];
            if (utils.isFunction(fn)) {
                return fn.apply(context.obj, argValues);
            }
            throw new Error(context.prop + ' is not a function');
        }
    }

    evaluateMember(member, context) {
        var obj = this.evaluateNode(member.object);

        if (obj == null && (this.options.allowNull || member.object.allowNull)) {
            obj = new NullExpressionNode();
        }

        if (member.computed) {
            var prop = this.evaluateNode(member.property);
            return obj[prop];
        }

        return this.evaluateNode(member.property, {
            target: obj,
            targetNode: member.object,
            callee: context && context.callee,
            assignmentLeft: context && context.assignmentLeft
        });
    }

    evaluateIdentifier(identifier, context) {
        var target;

        context = context || {};

        if (context.targetNode == null) {
            target = this.scope;
        }
        else {
            target = context.target
        }

        if (context.assignmentLeft || context.callee) {
            return {
                obj: target,
                prop: identifier.name
            };
        }

        if (context.propertyKey) {
            return identifier.name;
        }

        var result = target[identifier.name];

        if (result == null && this.locals) {
            result = this.locals[identifier.name];
        }

        return result;
    }

    evaluateLiteral(literal) {
        return literal.value;
    }

    evaluateProperty(prop) {
        var key = this.evaluateNode(prop.key, {
            propertyKey: true
        });

        var value = this.evaluateNode(prop.value);

        return {
            key: key,
            value: value
        };
    }

    evaluateObject(obj) {
        var result = {};

        obj.properties.forEach(item => {
            var def = this.evaluateNode(item);
            result[def.key] = def.value;
        });

        return result;
    }

    evaluateArray(arr) {
        var result = [];

        arr.childNodes.forEach(child => {
            result.push(this.evaluateNode(child));
        });

        return result;
    }
}