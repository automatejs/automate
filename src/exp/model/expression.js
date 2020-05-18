import { AstNode } from './ast-node';
import { AST } from './ast';

export class ExpressionStatementNode extends AstNode {
    constructor() {
        super(AST.ExpressionStatement);
    }
}