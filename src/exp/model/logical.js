import { AstNode } from './ast-node';
import { AST } from './ast';

export class LogicalExpressionNode extends AstNode {
    constructor(operator, left, right) {
        super(AST.LogicalExpression);
        this.operator = operator;
        this.left = left;
        this.right = right;
    }
}