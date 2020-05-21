import { StateDirective } from './state';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'm-checked'
})
class CheckedDirective extends StateDirective {
    constructor() {
        super('checked');
    }
}