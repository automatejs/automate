import { AstNode } from './ast-node';
import { AST } from './ast';

export class ArrayExpressionNode extends AstNode {
    constructor() {
        super(AST.ArrayExpression);
    }
}