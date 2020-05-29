import { StyleDirective } from './style';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'm-style-odd'
})
class StyleOddDirective extends StyleDirective {
    constructor() {
        super();
    }

    skipCurrentElm() {
        var index = this.$binding.evaluate('$index');
        return index & 1 === 0;
    }
}