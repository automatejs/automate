import { Directive } from '../../view';
import { directive } from '../../decorator';
import { Message } from '../../core';

@directive({
    namespace: 'automate',
    key: 'switch'
})
class SwitchDirective extends Directive {
    constructor() {
        super();
        this.value = null;
        this.matchCount = 0;
        this.changed = new Message();
        this.defaultMatched = true;
        this.matchDefault = new Message();
    }

    onChange(value) {
        this.value = value;
        this.changed.fire();
    }

    plusMatch() {
        this.matchCount++;
        this.checkDefault();
    }

    minusMatch() {
        this.matchCount--;
        this.checkDefault();
    }

    checkDefault() {
        var defaultMatched = this.matchCount <= 0;

        if (this.defaultMatched !== defaultMatched) {
            this.defaultMatched = defaultMatched;
            this.matchDefault.fire();
        }
    }
}