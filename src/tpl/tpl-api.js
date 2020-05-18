import * as utils from '../utils';
import { TplLexer } from './tpl-lexer';
import { TplParser } from './tpl-parser';

function lexTpl(tpl) {
    tpl = utils.escapeHtml(tpl);
    return new TplLexer().lex(tpl);
}

function parseTpl(tpl) {
    tpl = utils.escapeHtml(tpl);
    return new TplParser(new TplLexer()).parse(tpl);
}

export { lexTpl, parseTpl };