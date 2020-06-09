import { Directive } from '../../view';
import { directive } from '../../decorator';

@directive({
    namespace: 'automate',
    key: 'switchDefault'
})
class SwitchDefaultDirective extends Directive {
    constructor() {
        super();
        this.switchCtrl = null;
        this.$placeholder = document.createComment('switch-default');
    }

    afterLink() {
        this.switchCtrl = this.$seekUpDirective('switch');

        if (this.switchCtrl == null) {
            throw new Error('Require m-switch directive');
        }

        this.switchCtrl.matchDefault.on(() => {
            this[this.switchCtrl.defaultMatched ? '$appendElement' : '$removeElement']();
        });

        if(!this.switchCtrl.defaultMatched) {
            this.$removeElement();
        }
    }
}