import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'm-show'
})
class ShowDirective extends Directive {
    constructor() {
        super();
        this.initial = 'initial';
    }

    onChange(value) {
        if (value) {
            if (this.$elm.style.display === 'none') {
                this.$elm.style.display = this.initial;
            }
        } else {
            this.initial = this.$elm.style.display;
            this.$elm.style.display = 'none';
        }
    }
}