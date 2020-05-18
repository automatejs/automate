import { AstNode } from './ast-node';
import { AST } from './ast';

export class ObjectExpressionNode extends AstNode {
    constructor(properties) {
        super(AST.ObjectExpression);
        this.properties = properties;
    }
}