import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'm-bind-html'
})
class BindHtmlDirective extends Directive {
    constructor() {
        super();
    }

    onChange(value) {
        this.$element.innerHTML = value;
    }
}