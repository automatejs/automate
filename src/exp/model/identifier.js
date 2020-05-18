import { AstNode } from './ast-node';
import { AST } from './ast';

export class IdentifierNode extends AstNode {
    constructor(name) {
        super(AST.Identifier);
        this.name = name;
        this.allowNull = false;
    }
}