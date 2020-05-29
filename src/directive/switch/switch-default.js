import { Directive } from '../../view';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'm-switch-default'
})
class SwitchDefaultDirective extends Directive {
    constructor() {
        super();
        this.switchCtrl = null;
        this.$placeholder = document.createComment('m-switch-default');
    }

    afterLink() {
        this.switchCtrl = this.$seekUpDirective('m-switch');

        if (this.switchCtrl == null) {
            throw new Error('Require m-switch directive');
        }

        this.switchCtrl.matchDefault.on(() => {
            this.$removeElement(!this.switchCtrl.defaultMatched);
        });

        if(!this.switchCtrl.defaultMatched) {
            this.$removeElement(true);
        }
    }
}