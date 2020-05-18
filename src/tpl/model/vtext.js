import { VNode } from './vnode';

export class VText extends VNode {
    constructor(value) {
        super('#text', value);
        this.elm = null;
    }
}