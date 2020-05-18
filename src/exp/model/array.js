import { AstNode } from './ast-node';
import { AST } from './ast';
import * as utils from '../../utils';

export class ArrayExpressionNode extends AstNode {
    constructor() {
        super(AST.ArrayExpression);
    }
}