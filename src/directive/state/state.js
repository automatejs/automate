import { Directive } from '../../view';

export class StateDirective extends Directive {
    constructor(key) {
        super();
        this.key = key;
    }

    onChange(value) {
        if (value) {
            if (!this.$element.hasAttribute(this.key)) {
                this.$element.setAttribute(this.key, '');
            }
        } else {
            if (this.$element.hasAttribute(this.key)) {
                this.$element.removeAttribute(this.key);
            }
        }
    }
}