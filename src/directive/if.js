import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'if'
})
class IfDirective extends Directive {
    constructor() {
        super();
        this.$placeholder = document.createComment('n-if');
    }

    onChange(value) {
        this[value ? '$appendElement' : '$removeElement']();
    }
}