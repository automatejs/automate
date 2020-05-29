import { VNode, nodeType } from './vnode';

export class VType extends VNode {
    constructor() {
        super(nodeType.documentType);
    }
}