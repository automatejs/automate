import { isVText, isVComment } from './tpl-api'

export class TplBuilder {
    constructor() {

    }

    build(vnode) {
        if (isVText(vnode)) {
            return this.buildText(vnode);
        }

        if(isVComment(vnode)) {
            return this.buildComment(vnode);
        }

        return this.buildElement(vnode);
    }

    buildElement(velm) {
        var attrTpl = velm.vattrs.map((vattr) => {
                return this.buildAttribute(vattr);
            }).join(' '),
            childTpl = velm.childNodes.map((child) => {
                return this.build(child);
            }).join('');

        if(attrTpl) {
            attrTpl = ' ' + attrTpl;
        }

        var tpl = '<' + velm.nodeName + attrTpl + '>' + childTpl;

        if (!velm.selfClosed) {
            tpl += ('</' + velm.nodeName + '>');
        }

        return tpl;
    }

    buildAttribute(vattr) {
        return vattr.nodeName + (vattr.nodeValue == null ? '' : ('=' + vattr.quote + vattr.nodeValue + vattr.quote));
    }

    buildText(vtext) {
        return vtext.nodeValue;
    }

    buildComment(vcmnt) {
        return vcmnt.nodeValue;
    }
}

