import { Directive } from '../view';
import { directive } from '../decorator';
import * as utils from '../utils';
import * as dom from '../dom';

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
        this.buffer = new Map();
        this.unwatchCollection = null;
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
        velm.removeAttr(vattr);
        this.itemTemplate = velm.getOuterTpl();

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

        this.unwatchCollection = scope.$watchCollection(this.itemsExp, () => {
            var fragment = this.render(scope);
            dom.removeElementsBetween(header, footer);
            footer.parentNode.insertBefore(fragment, footer);
        });

        return fragment;
    }

    render(scope) {
        var self = this;
        var items = scope.$eval(this.itemsExp);
        var fragment = document.createDocumentFragment();
        var newBuffer = new Map();

        utils.forEach(items, function (item, key) {
            var renderer = self.getRendererFromBuffer(self.buffer, item);

            if (!renderer) {
                var locals = {};
                locals['$key'] = key;
                locals['$index'] = key;
                locals[self.itemExp] = item;
                renderer = self.$render(self.itemTemplate, locals);
            }

            self.setRendererToBuffer(newBuffer, item, renderer);
            fragment.appendChild(renderer.view);
        });

        this.buffer.forEach(function (list) {
            list.forEach(function (renderer) {
                renderer.destroy();
            });
        });

        this.buffer = newBuffer;

        return fragment;
    }

    getRendererFromBuffer(buffer, dataItem) {
        var renderer;

        if (buffer.has(dataItem)) {
            var list = buffer.get(dataItem);

            if (list.length) {
                renderer = list.shift();
            } else {
                buffer.delete(dataItem);
            }
        }

        return renderer;
    }

    setRendererToBuffer(buffer, dataItem, renderer) {
        var list;

        if (buffer.has(dataItem)) {
            list = buffer.get(dataItem);
        } else {
            list = [];
            buffer.set(dataItem, list);
        }

        list.push(renderer);
    }

    onDestroy() {
        this.buffer = null;
        this.unwatchCollection && this.unwatchCollection();
    }
}
