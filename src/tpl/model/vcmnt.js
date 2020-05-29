import { VNode, nodeType } from './vnode';

export class VCmnt extends VNode {
    constructor(value) {
        super(nodeType.comment, '#comment', value);
    }

    onCloneNode() {
        return new VCmnt(this.nodeName, this.nodeValue);
    }
}
