import { AstNode } from './ast-node';
import { AST } from './ast';

export class BinaryExpressionNode extends AstNode {
    constructor(operator, left, right) {
        super(AST.BinaryExpression);
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
}