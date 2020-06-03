import { parseExp } from '../exp';
import { parseTpl } from '../tpl';

export class Parser {
    constructor() {
        this.programs = {};
    }

    parseExpression(exp) {
        var program = this.programs[exp];

        if (!program) {
            program = parseExp(exp);
            this.programs[exp] = program;
        }

        return program;
    }

    parseTemplate(tpl) {
        return parseTpl(tpl);
    }

    destroy() {

    }
}