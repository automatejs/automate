import { AstNode } from './ast-node';
import { AST } from './ast';

export class LiteralNode extends AstNode {
    constructor(value) {
        super(AST.Literal);
        this.value = value;
    }
}