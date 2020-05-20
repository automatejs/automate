import { Directive, Delayer } from '../view';
import { directive } from '../decorator';
import { TplBuilder } from '../tpl';
import { Render } from '../render';
import * as utils from '../utils';
import * as helper from '../helper';

@directive({
    namespace: 'automate',
    key: 'm-repeat'
})
class RepeatDirective extends Directive {
    constructor() {
        super();
        this.itemExp = '';
        this.itemsExp = '';
        this.itemTemplate = '';
    }

    onCompile(velm, vattr) {
        var arg = vattr.nodeValue;
        var pattern = /^([a-z_]+\w+)\s+in\s+(.+)$/i;
        var result = pattern.exec(arg);

        if (result == null) {
            throw new Error('m-repeat: parameter is not valid');
        }

        this.itemExp = result[1];
        this.itemsExp = result[2];
        var builder = new TplBuilder();
        velm.removeAttr(vattr);
        this.itemTemplate = builder.build(velm);

        // identify this directive would take over link function for related virtual element node, onLink function will be called
        return true;
    }

    onLink(scope) {
        var fragment = document.createDocumentFragment();
        var header = document.createComment('start: m-repeat');
        var footer = document.createComment('end: m-repeat');

        fragment.appendChild(header);
        fragment.appendChild(this.render(scope));
        fragment.appendChild(footer);

        this.delayer = new Delayer(() => {
            var fragment = this.render(scope);
            helper.removeNodeBetween(header, footer);
            footer.parentNode.insertBefore(fragment, footer);
        });

        scope.$watchCollection(this.itemsExp, () => {
            this.delayer.execute(this);
        });

        return fragment;
    }

    render(scope) {
        var self = this;
        var items = scope.$eval(this.itemsExp);
        var fragment = document.createDocumentFragment();

        utils.forEach(items, function(item, key) {
            var locals = {};
            locals['$key'] = key;
            locals['$index'] = key;
            locals[self.itemExp] = item;

            var render = new Render(scope, locals);
            var itemContent = render.render(self.itemTemplate);

            fragment.appendChild(itemContent);
        });

        return fragment;
    }

    onDestroy() {
        if(this.delayer != null) {
            this.delayer.destroy();
        }
    }
}
