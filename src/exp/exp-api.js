import { ExpLexer } from './exp-lexer';
import { ExpParser } from './exp-parser';

function lexExp(exp) {
    return new ExpLexer().lex(exp);
}

function parseExp(exp) {
    return new ExpParser(new ExpLexer()).parse(exp);
}

export { lexExp, parseExp };