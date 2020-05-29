import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'm-bind'
})
class BindDirective extends Directive {
    constructor() {
        super();
    }

    onChange(value) {
        this.$element.innerText = value;
    }
}