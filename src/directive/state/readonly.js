import { StateDirective } from './state';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'readonly'
})
class ReadonlyDirective extends StateDirective {
    constructor() {
        super('readonly');
    }
}