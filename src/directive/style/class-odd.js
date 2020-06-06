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
        var index = this.$eval('$index');
        return index & 1 === 0;
    }
}