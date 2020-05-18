import { VNode } from './vnode';

export class VAttr extends VNode {
    constructor(name, value) {
        super(name, value);
        this.velm = null;
        this.quote = '"';
    }

    setValue(value) {
        this.nodeValue = value;
    }

    onDdestroy() {

    }
}
