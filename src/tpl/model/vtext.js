import { VNode, nodeType } from './vnode';

export class VText extends VNode {
    constructor(value) {
        super(nodeType.text, '#text', value);
        this.elm = null;
    }

    onCloneNode() {
        return new VText(this.nodeName, this.nodeValue);
    }
}