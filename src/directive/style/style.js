import { Directive } from '../../view';
import { directive } from '../../decorator';
import * as utils from '../../utils';

@directive({
    namespace: 'automate',
    key: 'style'
})
export class StyleDirective extends Directive {
    constructor() {
        super();
    }

    onChange(newStyle, oldStyle) {
        if (this.skipCurrentElm()) {
            return;
        }

        var self = this;

        if (oldStyle) {
            utils.forEach(oldStyle, function (value, key) {
                self.$element.style[key] = '';
            });
        }

        if (utils.isObject(newStyle)) {
            utils.forEach(newStyle, function (value, key) {
                self.$element.style[key] = value;
            });
        }
    }

    skipCurrentElm() {
        return false;
    }
}