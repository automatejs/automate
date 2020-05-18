import { AstNode } from './ast-node';
import { AST } from './ast';

export class PropertyNode extends AstNode {
    constructor() {
        super(AST.Property);
        this.kind = 'init';
        this.key = null;
        this.value = null;
        this.computed = false;
    }
}