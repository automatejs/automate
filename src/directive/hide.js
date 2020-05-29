import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'm-hide'
})
class HideDirective extends Directive {
    constructor() {
        super();
    }

    onChange(value) {
        this.$hideElement(value);
    }
}