import { StateDirective } from './state';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'm-disabled'
})
class DisabledDirective extends StateDirective {
    constructor() {
        super('disabled');
    }
}