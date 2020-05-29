import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'm-show'
})
class ShowDirective extends Directive {
    constructor() {
        super();
    }

    onChange(value) {
        this.$hideElement(!value);
    }
}