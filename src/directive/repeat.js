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
        this.itemViews = new Map();
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
        var itemViews = new Map();

        utils.forEach(items, function (item, key) {
            var itemView = self.getViewFromBuffer(self.itemViews, item);

            if (!itemView) {
                var locals = {};
                locals['$key'] = key;
                locals['$index'] = key;
                locals[self.itemExp] = item;
                itemView = self.$render(self.itemTemplate, locals);
            }

            self.setViewToBuffer(itemViews, item, itemView);
            fragment.appendChild(itemView.content);
        });

        this.itemViews.forEach(function (list) {
            list.forEach(function (view) {
                view.destroy();
            });
        });

        this.itemViews = itemViews;

        return fragment;
    }

    getViewFromBuffer(buffer, dataItem) {
        var view;

        if (buffer.has(dataItem)) {
            var list = buffer.get(dataItem);

            if (list.length) {
                view = list.shift();
            } else {
                buffer.delete(dataItem);
            }
        }

        return view;
    }

    setViewToBuffer(buffer, dataItem, view) {
        var list;

        if (buffer.has(dataItem)) {
            list = buffer.get(dataItem);
        } else {
            list = [];
            buffer.set(dataItem, list);
        }

        list.push(view);
    }

    onDestroy() {
        this.itemViews.forEach((list) => list.forEach(view => view.destroy()));
        this.unwatchCollection && this.unwatchCollection();
    }
}
