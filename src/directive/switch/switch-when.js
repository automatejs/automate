import { Directive } from '../../view';
import { directive } from '../../decorator';
import { Message } from '../../core';

@directive({
    namespace: 'automate',
    key: 'm-switch-when'
})
class SwitchWhenDirective extends Directive {
    constructor() {
        super();
        this.value = null;
        this.matched = false;
        this.switchCtrl = null;
        this.changed = new Message();
        this.$placeholder = document.createComment('m-switch-when');
    }

    afterLink() {
        this.switchCtrl = this.$seekUpDirective('m-switch');

        if (this.switchCtrl == null) {
            throw new Error('Require m-switch directive');
        }

        this.switchCtrl.changed.on(() => {
            this.render();
        });
    }

    onChange(value) {
        this.value = value;
        this.render();
    }

    render() {
        var matched = this.switchCtrl.value === this.value;

        if(this.matched != matched) {
            this.matched = matched;

            if (matched) {
                this.switchCtrl.plusMatch();
            } else {
                this.switchCtrl.minusMatch();
            }
        }

        this.$removeElement(!matched);
    }
}