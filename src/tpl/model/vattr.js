import { VNode, nodeType } from './vnode';

export class VAttr extends VNode {
    constructor(name, value) {
        super(nodeType.attribute, name, value);
        this.velm = null;
        this.quote = '"';
    }

    setValue(value) {
        this.nodeValue = value;
    }

    onCloneNode() {
        return new VAttr(this.nodeName, this.nodeValue);
    }

    onDestroy() {

    }
}
