import { ClassDirective } from './class';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'm-class-even'
})
class ClassEvenDirective extends ClassDirective {
    constructor() {
        super();
    }

    skipCurrentElm() {
        var index = this.$evaluator.evaluate('$index');
        return index & 1 === 1;
    }
}