import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'm-hide'
})
class HideDirective extends Directive {
    constructor() {
        super();
        this.initial = 'initial';
    }

    onChange(value) {
        if (value) {
            this.initial = this.$elm.style.display;
            this.$elm.style.display = 'none';
        } else {
            if (this.$elm.style.display === 'none') {
                this.$elm.style.display = this.initial;
            }
        }
    }
}