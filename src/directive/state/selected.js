import { StateDirective } from './state';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'selected'
})
class SelectedDirective extends StateDirective {
    constructor() {
        super('selected');
    }
}