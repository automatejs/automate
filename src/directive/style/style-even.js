import { StyleDirective } from './style';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'm-style-even'
})
class StyleEvenDirective extends StyleDirective {
    constructor() {
        super();
    }

    skipCurrentElm() {
        var index = this.$eval('$index');
        return index & 1 === 1;
    }
}