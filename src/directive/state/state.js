import { Directive } from '../../view';

export class StateDirective extends Directive {
    constructor(key) {
        super();
        this.key = key;
    }

    onChange(value) {
        if (value) {
            if (!this.$elm.hasAttribute(this.key)) {
                this.$elm.setAttribute(this.key, '');
            }
        }
        else {
            if (this.$elm.hasAttribute(this.key)) {
                this.$elm.removeAttribute(this.key);
            }
        }
    }
}