import { AstNode } from './ast-node';
import { AST } from './ast';

export class MemberExpressionNode extends AstNode {
    constructor(object, property, computed) {
        super(AST.MemberExpression);
        this.object = object;
        this.property = property;
        this.computed = computed;
        this.allowNull = false;
    }
}