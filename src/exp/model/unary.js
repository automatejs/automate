import { AstNode } from './ast-node';
import { AST } from './ast';

export class UnaryExpressionNode extends AstNode {
    constructor(operator, arg) {
        super(AST.UnaryExpression);
        this.prefix = true;
        this.operator = operator;
        this.arg = arg;
    }
}