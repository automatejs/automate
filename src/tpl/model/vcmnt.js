import { VNode } from './vnode';

export class VCmnt extends VNode {
    constructor(value) {
        super('#comment', value);
    }
}
