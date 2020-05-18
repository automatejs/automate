import { AstNode } from './ast-node';
import { AST } from './ast';

export class CallExpressionNode extends AstNode {
    constructor(callee, args) {
        super(AST.CallExpression);
        this.callee = callee;
        this.args = args;
        this.filter = false;
    }
}