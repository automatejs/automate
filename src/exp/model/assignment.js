import { AstNode } from './ast-node';
import { AST } from './ast';

export class AssignmentExpressionNode extends AstNode {
    constructor(left, right, operator) {
        super(AST.AssignmentExpression);
        this.left = left;
        this.right = right;
        this.operator = operator;
    }
}