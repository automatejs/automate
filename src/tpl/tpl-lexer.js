import { ExpLexer } from '../exp';

export class TplLexer extends ExpLexer {
    constructor(options) {
        super(options);
    }

    isValidIdentifierStart(ch) {
        return ('a' <= ch && ch <= 'z' ||
            'A' <= ch && ch <= 'Z' ||
            '_' === ch || ch === '$' ||
            ch === '@' || ch === ':' || ch === '*');
    }

    isValidIdentifierContinue(ch, cp) {
        return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch) || ch === '-' || ch === '.';
    }

    expectString(str) {
        var num = str.length;
        return (this.index + num <= this.text.length) ? (str === this.text.substr(this.index, num)) : false;
    }

    // html comment "<!--comment-->"
    readComment(begin, end) {
        var start = this.index;
        this.index += begin.length;
        var string = '';
        var rawString = begin;
        while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            rawString += ch;
            if (this.expectString(end)) {
                rawString += end;
                this.index += end.length;
                this.tokens.push({
                    index: start,
                    text: rawString,
                    comment: true,
                    value: string
                });
                return;
            } else {
                string += ch;
            }
            this.index++;
        }
        this.throwError('Unterminated comment', start);
    }

    // html text
    readText() {
        var start = this.index;
        var string = '';
        while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            var ch2 = this.peek();
            if ((ch === '<' && (this.isIdentifierStart(ch2) || ch2 === '/')) || this.expectString('<!--')) {
                break;
            }
            string += ch;
            this.index++;
        }
        this.tokens.push({
            index: start,
            text: string,
            textTag: true
        });
    }

    // html tag
    readTag(begin, end, closing, doctype) {
        this.tokens.push({ index: this.index, text: begin, tag: true, closing: closing, begin: true, doctype: doctype });
        this.index += begin.length;
        this.readIdent();

        while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);

            if (!closing) {
                var ch2 = this.peek();
                var str = ch + ch2;
                if (str === '/' + end) {
                    this.tokens.push({ index: this.index, text: str, tag: true, closing: true, end: true });
                    this.index += str.length;
                    break;
                }
            }

            if (ch === end) {
                this.tokens.push({
                    index: this.index,
                    text: end,
                    tag: true,
                    closing: !!doctype ? true : closing,
                    end: true
                });
                this.index += end.length;
                break;
            }

            if (this.isIdentifierStart(this.peekMultichar())) {
                this.readIdent();
            }
            else if (ch === '"' || ch === '\'') {
                this.readString(ch);
            }
            else if (this.isWhitespace(ch)) {
                this.index++;
            }
            else if (ch === '=') {
                this.tokens.push({ index: this.index, text: '=', equal: true });
                this.index++;
            }
            else {
                this.throwError('Unexpected next character ', this.index, this.index + 1);
            }
        }
    }

    lex(text) {
        this.text = text;
        this.index = 0;
        this.tokens = [];

        var allowDocType = !!this.options.allowDocType;
        while (this.index < this.text.length) {
            var ch = this.text.charAt(this.index);
            var ch2 = this.peek();
            var ch3 = this.peek(2);
            if (this.expectString('<!--')) {
                this.readComment('<!--', '-->');
            }
            else if (ch === '<' && this.isIdentifierStart(ch2)) {
                this.readTag('<', '>', false);
            }
            else if (this.expectString('</') && this.isIdentifierStart(ch3)) {
                this.readTag('</', '>', true);
            }
            else if (this.expectString('<!DOCTYPE')) {
                if (allowDocType) {
                    this.readTag('<!', '>', true, true);
                }
                else {
                    this.throwError('DOCTYPE is not allowed', this.index, this.index + 1);
                }
            }
            else {
                this.readText();
            }
        }
        return this.tokens;
    }
}