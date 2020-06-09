import { StateDirective } from './state';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'disabled'
})
class DisabledDirective extends StateDirective {
    constructor() {
        super('disabled');
    }
}