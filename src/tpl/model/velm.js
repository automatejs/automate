import { VNode } from './vnode';
import { VAttr } from './vattr';
import { parseTpl } from '../tpl-api';

export class VElm extends VNode {
    constructor(name) {
        super(name);
        this.vattrs = [];
        this.selfClosed = false;
        this.elm = null;
    }

    pushAttr(attr) {
        attr.velm = this;
        this.vattrs.push(attr);
    }

    hasAttr() {
        return this.vattrs.length !== 0;
    }

    getAttr(key) {
        var matches = this.vattrs.filter(function (attr) {
            return attr.belongTo(key);
        });

        if (!matches.length) {
            return null;
        }

        return matches[0];
    }

    setAttr(key, value) {
        var target, matches = this.vattrs.filter(function (attr) {
            return attr.belongTo(key);
        });

        if (matches.length > 0) {
            target = matches[0];
            target.setValue(value);
        }
        else {
            target = new VAttr(key, value);
            target.velm = this;
            target.compile(this.compileOptions);
        }

        this.vattrs.push(target);

        return target;
    }

    removeAttr(key) {
        var target = [], self = this;

        if (key instanceof VAttr) {
            var index = this.vattrs.indexOf(key);
            if (index !== -1) {
                target = self.vattrs.splice(index, 1);
            }
        }
        else {
            this.vattrs.filter(function (attr) {
                return attr.belongTo(key);
            }).forEach(function (match) {
                var index = self.vattrs.indexOf(match);
                match.destroy();
                target = self.vattrs.splice(index, 1);
            });
        }

        return target.length > 0 ? target[0] : null;
    }

    appendAttr(attr) {
        if (attr.velm != null) {
            throw new Error("Current attribute is not new!");
        }

        attr.velm = this;
        attr.compile(this.compileOptions);
        this.vattrs.push(attr);
        return attr;
    }

    setOuterTpl(tpl) {
        var self = this;
        parseTpl(tpl).forEach(function (vnode) {
            vnode.parentNode = null;
            self.parentNode.insertBefore(self, vnode);
        });
        self.parentNode.removeChild(self);
    }

    setInnerTpl(tpl) {
        var self = this;
        this.clearChildNodes();
        parseTpl(tpl).forEach(function (vnode) {
            vnode.parentNode = null;
            self.appendChild(vnode);
        });
    }

    onDestroy() {
        this.vattrs.forEach(function (attr) {
            attr.destroy();
        });

        this.vattrs.length = 0;
    }
}