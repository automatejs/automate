import { StyleDirective } from './style';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    selector: 'm-style-odd'
})
class StyleOddDirective extends StyleDirective {
    constructor() {
        super();
    }

    skipCurrentElm() {
        var index = this.$evaluator.evaluate('$index');
        return index & 1 === 0;
    }
}