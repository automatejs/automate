import { AstNode } from './ast-node';
import { AST } from './ast';

export class ProgramNode extends AstNode {
    constructor() {
        super(AST.Program);
    }
}