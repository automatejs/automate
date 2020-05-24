import { Directive } from '../../view';
import { directive } from '../../decorator';
import * as utils from '../../utils';

@directive({
    namespace: 'automate',
    selector: 'm-style'
})
export class StyleDirective extends Directive {
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
            this.setElmStyle(args.newValue);
        });

        this.setElmStyle(scope.$eval(this.valueText));
    }

    skipCurrentElm() {
        return false;
    }

    setElmStyle(value) {
        // clean up style
        this.$elm.style = '';

        // set new style
        if (utils.isString(value)) {
            this.$elm.style = value;
        }
        else if (utils.isObject(value)) {
            utils.forEach(value, function (value, key) {
                element.style[key] = value;
            });
        }
        else {
            throw new Error('Parameter of n-style should be string or object');
        }
    }
}
