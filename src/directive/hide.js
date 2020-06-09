import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'hide'
})
class HideDirective extends Directive {
    constructor() {
        super();
    }

    onChange(value) {
        this[value ? '$hideElement' : '$showElement']();
    }
}