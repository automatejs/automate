import { ClassDirective } from './class';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'm-class-odd'
})
class ClassOddDirective extends ClassDirective {
    constructor() {
        super();
    }

    skipCurrentElm() {
        var index = this.$binding.evaluate('$index');
        return index & 1 === 0;
    }
}