import { AstNode } from './ast-node';
import { AST } from './ast';

export class ConditionalExpressionNode extends AstNode {
    constructor(test, alternate, consequent) {
        super(AST.ConditionalExpression);
        this.test = test;
        this.alternate = alternate;
        this.consequent = consequent;
    }
}