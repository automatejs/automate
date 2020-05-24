import { Directive } from '../../view';
import { directive } from '../../decorator';
import * as utils from '../../utils';

@directive({
    namespace: 'automate',
    key: 'm-class'
})
export class ClassDirective extends Directive {
    constructor() {
        super();
        this.valueText = null;
    }

    onCompile(velm, vattr) {
        this.valueText = vattr.nodeValue;
        return true;
    }

    onLink(scope) {
        if (this.skipCurrentElm()) {
            return;
        }

        scope.$watchCollection(this.valueText, (args) => {
            this.setElmClass(args.newValue);
        });

        this.setElmClass(scope.$eval(this.valueText));
    }

    setElmClass(value) {
        if (utils.isArray(value)) {
            value = value.join(' '); 
        }
        else if (!utils.isString(value)) {
            throw new Error('directive "m-class" should bind string or array');
        }

        this.$elm.class = value;
    }

    skipCurrentElm() {
        return false;
    }
}
