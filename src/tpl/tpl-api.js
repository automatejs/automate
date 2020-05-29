import * as utils from '../utils';
import { TplLexer } from './tpl-lexer';
import { TplParser } from './tpl-parser';
import { nodeType } from './model';

function lexTpl(tpl) {
    tpl = utils.escapeHtml(tpl);
    return new TplLexer().lex(tpl);
}

function parseTpl(tpl) {
    tpl = utils.escapeHtml(tpl);
    return new TplParser(new TplLexer()).parse(tpl);
}

function isVElm(vnode) {
    return vnode.nodeType === nodeType.element;
}

function isVAttr(vnode) {
    return vnode.nodeType === nodeType.attribute;
}

function isVText(vnode) {
    return vnode.nodeType === nodeType.text;
}

function isVComment(vnode) {
    return vnode.nodeType === nodeType.comment;
}

export { lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment };