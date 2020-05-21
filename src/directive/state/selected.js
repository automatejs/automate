import { StateDirective } from './state';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    selector: 'm-selected'
})
class SelectedDirective extends StateDirective {
    constructor() {
        super('selected');
    }
}