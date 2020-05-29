import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'm-if'
})
class IfDirective extends Directive {
    constructor() {
        super();
        this.$placeholder = document.createComment('n-if');
    }

    onChange(value) {
        this.$removeElement(!value);
    }
}