import { Directive } from '../../view';
import { directive } from '../../decorator';
import * as dom from '../../dom';

@directive({
    namespace: 'automate',
    key: 'm-class'
})
export class ClassDirective extends Directive {
    constructor() {
        super();
    }

    onChange(newClass, oldClass) {
        if (this.skipCurrentElm()) {
            return;
        }

        if (oldClass) {
            dom.removeClass(this.$element, oldClass.join(''));
        }

        if (newClass) {
            dom.addClass(this.$element, newClass.join(''));
        }
    }

    skipCurrentElm() {
        return false;
    }
}
