import { ClassDirective } from './class';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    selector: 'm-class-odd'
})
class ClassOddDirective extends ClassDirective {
    constructor() {
        super();
    }

    skipCurrentElm() {
        var index = this.$evaluator.evaluate('$index');
        return ndex & 1 === 0;
    }
}