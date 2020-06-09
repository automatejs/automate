import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'show'
})
class ShowDirective extends Directive {
    constructor() {
        super();
    }

    onChange(value) {
        this[value ? '$showElement' : '$hideElement']();
    }
}