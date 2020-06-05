import * as utils from '../utils';
import { AST } from './model';

export class ExpBuilder {
    constructor() {

    }

    build(node) {
        var result;

        switch (node.type) {
            case AST.ExpressionStatement:
                result = this.buildExpression(node);
                break;
            case AST.AssignmentExpression:
                result = this.buildAssignment(node);
                break;
            case AST.ConditionalExpression:
                result = this.buildCondition(node);
                break;
            case AST.LogicalExpression:
                result = this.buildLogic(node);
                break;
            case AST.BinaryExpression:
                result = this.buildBinary(node);
                break;
            case AST.UnaryExpression:
                result = this.buildUnary(node);
                break;
            case AST.CallExpression:
                result = this.buildCall(node);
                break;
            case AST.MemberExpression:
                result = this.buildMember(node);
                break;
            case AST.Identifier:
                result = this.buildIdentifier(node);
                break;
            case AST.Literal:
                result = this.buildLiteral(node);
                break;
            case AST.ArrayExpression:
                result = this.buildArray(node);
                break;
            case AST.Property:
                result = this.buildProperty(node);
                break;
            case AST.ObjectExpression:
                result = this.buildObject(node);
                break;
        }

        return result;
    }

    buildExpression(exp) {
        var result;

        exp.childNodes.forEach(child => {
            result = this.build(child);
        });

        return result;
    }

    buildAssignment(assignment) {
        var target = this.build(assignment.left);
        var value = this.build(assignment.right);
        return utils.format('{0}={1}', target, value);
    }

    buildCondition(condition) {
        var test = this.build(condition.test);
        var alternate = this.build(condition.alternate);
        var consequent = this.build(condition.consequent);
        return utils.format('{0}?{1}:{2}', test, alternate, consequent);
    }

    buildLogic(logic) {
        var leftValue = this.build(logic.left);
        var rightValue = this.build(logic.right);
        return utils.format('{0}{1}{2}', leftValue, logic.operator, rightValue);
    }

    buildBinary(binary) {
        var leftValue = this.build(binary.left);
        var rightValue = this.build(binary.right);
        return utils.format('{0}{1}{2}', leftValue, binary.operator, rightValue);
    }

    buildUnary(unary) {
        var value = this.build(unary.arg);
        return utils.format('{0}{1}', unary.operator, value);
    }

    buildCall(call) {
        var res = '', argValues = call.args.map(arg => {
            return this.build(arg);
        });

        var fn = this.build(call.callee);

        if (call.filter) {
            if (argValues.length > 0) {
                res = argValues.shift();
            }

            res += ' | ' + fn;

            if (argValues.length > 0) {
                res += ':' + argValues.join(':');
            }
        }
        else {
            res = utils.format('{0}({1})', fn, argValues.join(', '));
        }

        return res;
    }

    buildMember(member) {
        var obj = this.build(member.object);
        var prop = this.build(member.property);

        if (member.computed) {
            return utils.format('{0}[{1}]', obj, prop);
        }

        return utils.format('{0}.{1}', obj, prop);
    }

    buildIdentifier(identifier) {
        return identifier.name;
    }

    buildLiteral(literal) {
        if (utils.isString(literal.value)) {
            return utils.format('"{0}"', literal.value);
        }

        return literal.value;
    }

    buildProperty(prop) {
        var key = this.build(prop.key, {
            propertyKey: true
        });

        var value = this.build(prop.value);

        return utils.format('{0}:{1}', key, value);
    }

    buildObject(obj) {
        var props = obj.properties.map(item => {
            return this.build(item);
        });

        return utils.format('{{0}}', props.join(', '));
    }

    buildArray(arr) {
        var items = arr.childNodes.map(child => {
            return this.build(child);
        });

        return utils.format('[{0}]', items.join(','));
    }
}