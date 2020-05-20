import * as utils from '../utils';
import { AST, NullExpressionNode } from './model';
import { parseExp } from './exp-api';
import { ExpBuilder } from './exp-builder';

class Accessor {
    constructor(callee, exp) {
        this.callee = callee;
        this.exp = exp;
        this.children = {};
    }

    createChild(key, callee, exp) {
        if (!this.children[key]) {
            this.children[key] = new Accessor(callee, exp);
        }

        return this.children[key];
    }
}

export class Analyser {
    constructor(exp, locals) {
        this.exp = exp;
        this.locals = locals || {};
        this.program = null;
        this.builder = new ExpBuilder();
        this.accessors = {};
        this.localAccessors = {};
    }

    createAccessor(key, callee, exp) {
        if (!this.accessors[key]) {
            this.accessors[key] = new Accessor(callee, exp);
        }

        return this.accessors[key];
    }

    createLocalAccessor(key, callee, exp) {
        if (!this.localAccessors[key]) {
            this.localAccessors[key] = new Accessor(callee, exp);
        }

        return this.localAccessors[key];
    }

    analyse() {
        this.program = parseExp(this.exp);

        this.program.childNodes.forEach(child => {
            this.analyseNode(child);
        });
    }

    analyseNode(node, context) {
        var result = null;

        switch (node.type) {
            case AST.ExpressionStatement:
                this.analyseExpression(node);
                break;
            case AST.AssignmentExpression:
                this.analyseAssignment(node);
                break;
            case AST.ConditionalExpression:
                this.analyseCondition(node);
                break;
            case AST.LogicalExpression:
                this.analyseLogic(node);
                break;
            case AST.BinaryExpression:
                this.analyseBinary(node);
                break;
            case AST.UnaryExpression:
                this.analyseUnary(node);
                break;
            case AST.CallExpression:
                this.analyseCall(node);
                break;
            case AST.MemberExpression:
                result = this.analyseMember(node, context);
                break;
            case AST.Identifier:
                result = this.analyseIdentifier(node, context);
                break;
            case AST.Literal:
                result = this.analyseLiteral(node, context);
                break;
            case AST.ArrayExpression:
                this.analyseArray(node);
                break;
            case AST.Property:
                this.analyseProperty(node);
                break;
            case AST.ObjectExpression:
                this.analyseObject(node);
                break;
        }

        return result;
    }

    analyseExpression(exp) {
        exp.childNodes.forEach(child => {
            this.analyseNode(child);
        });
    }

    analyseAssignment(assignment) {
        this.analyseNode(assignment.right);
    }

    analyseCondition(condition) {
        this.analyseNode(condition.test);
        this.analyseNode(condition.alternate);
        this.analyseNode(condition.consequent);
    }

    analyseLogic(logic) {
        this.analyseNode(logic.left);
        this.analyseNode(logic.right);
    }

    analyseBinary(binary) {
        this.analyseNode(binary.left);
        this.analyseNode(binary.right);
    }

    analyseUnary(unary) {
        this.analyseNode(unary.arg);
    }

    analyseCall(call) {
        call.args.forEach(arg => {
            this.analyseNode(arg);
        });

        if(!call.filter) {
            this.analyseNode(call.callee, { callee: true });
        }
    }

    analyseMember(member, context) {
        var parent = this.analyseNode(member.object);

        if (member.computed) {
            this.analyseNode(member.property, {
                callee: context && context.callee
            });

            if (member.property.type === AST.Literal) {
                return parent.createChild(member.property.value, context && context.callee);
            }

            var key = this.builder.build(member.property);

            return parent.createChild(key, context && context.callee, true);
        }

        return this.analyseNode(member.property, {
            parent: parent,
            callee: context && context.callee
        });
    }

    analyseIdentifier(identifier, context) {
        var key = this.builder.build(identifier),
            callee = context && context.callee;

        if (context && context.parent) {
            return context.parent.createChild(key, callee);
        }

        if(this.locals[key]) {
            return this.createLocalAccessor(key, callee);
        }

        return this.createAccessor(key, callee);
    }

    analyseLiteral(literal, context) {
        var key = this.builder.build(literal);

        if(context && context.parent) {
            return context.parent.createChild(key);
        }
    }

    analyseProperty(prop) {
        this.analyseNode(prop.value);
    }

    analyseObject(obj) {
        obj.properties.forEach(item => {
            this.analyseNode(item);
        });
    }

    analyseArray(arr) {
        arr.childNodes.forEach(child => {
            this.analyse(child);
        });
    }
}