import { ExpParser } from '../exp';
import {
    VElm, VAttr, VText, VCmnt, VType
} from './model';

export class TplParser extends ExpParser {
    constructor(lexer, options) {
        super(lexer, options);
    }

    parse(text) {
        this.index = 0;
        this.text = text;
        this.tokens = this.lexer.lex(text);

        var root = new VElm();
        var doctype, allowDocType = !!this.options.allowDocType;
        while (this.index < this.tokens.length) {
            var token = this.current();

            if (token.doctype) {
                if (allowDocType) {
                    if (!doctype) {
                        doctype = this.doctype();
                        root.childNodes.push(doctype);
                    }
                    else {
                        this.throwError("DOCTYPE only allow one", token);
                    }
                }
                else {
                    this.throwError("DOCTYPE is not allowed", token);
                }
            }
            else if (token.comment) {
                var comment = new VCmnt(token.text);
                root.childNodes.push(comment);
                this.next();
            }
            else if (token.textTag) {
                var text = new VText(token.text);
                root.childNodes.push(text);
                this.next();
            }
            else if (token.tag && token.begin) {
                root.childNodes.push(this.element());
            }
            else {
                this.throwError("impossible", token);
            }
        }

        root.buildSibling();

        return root.childNodes;
    }

    doctype() {
        this.next();
        var docType = new VType();
        var token = this.current();

        if (token.identifier) {
            docType.nodeValue = token.text;
        }
        else {
            this.throwError(" Unexpected ", token);
        }

        this.attrs(docType).forEach(function (attr) {
            docType.childNodes.push(attr);
        });

        token = this.current();

        if (token.tag && token.end && token.closing) {
            this.next();
        }
        else {
            this.throwError(" Unexpected ", token);
        }

        return docType;
    }

    element(p) {
        this.next();
        var ele = new VElm();
        var token = this.current();

        if (token.identifier) {
            ele.nodeName = token.text;
            this.next();
        }
        else {
            this.throwError(" Unexpected ", token);
        }

        this.attrs(ele).forEach(function (attr) {
            ele.pushAttr(attr);
        });

        token = this.current();

        if (token.tag && token.end) {
            this.next();
            if (ele.nodeName === 'input') {
                ele.selfClosed = true;
                return ele;
            }
            if (!token.closing) {
                this.childElements(ele).forEach(function (child) {
                    ele.pushChild(child);
                });
            }
        }
        else {
            this.throwError(" Unexpected ", token);
        }

        token = this.current();
        if (token.tag && token.begin && token.closing) {
            this.next();
            token = this.current();
            if (token.identifier) {
                if (ele.nodeName === token.text) {
                    this.next();
                    token = this.current();
                    if (token.tag && token.end && token.closing) {
                        this.next();
                    }
                    else {
                        this.throwError(" Unexpected ", token);
                    }
                }
                else {
                    this.throwError(" Unexpected ", token);
                }
            }
            else {
                this.throwError(" Unexpected ", token);
            }
        }
        else {
            this.throwError(" Unexpected ", token);
        }

        return ele;
    }

    childElements(p) {
        var eles = [];

        while (this.index < this.tokens.length) {
            var token = this.current();

            if (token.tag && token.closing) {
                break;
            }
            else if (token.comment) {
                var comment = new VCmnt(token.text);
                eles.push(comment);
                this.next();
            }
            else if (token.textTag) {
                var text = new VText(token.text);
                eles.push(text);
                this.next();
            }
            else if (token.tag && token.begin) {
                eles.push(this.element(p));
            }
            else {
                this.throwError(" Unexpected ", token);
            }
        }

        return eles;
    }

    attrs(p) {
        var attrs = [];

        while (this.index < this.tokens.length) {
            var token = this.current();

            if (token.tag && token.end) {
                break;
            }

            var attr = new VAttr();

            if (token.identifier) {
                attr.nodeName = token.text;
                attr.origin = token.text;
                this.next();
                token = this.current();
                if (token.equal) {
                    this.next();
                    token = this.current();
                    if (token.constant) {
                        attr.nodeValue = token.value;
                        this.next();
                    }
                    else {
                        this.throwError(" Unexpected ", token);
                    }
                }
            }

            attrs.push(attr);
        }

        return attrs;
    }

    current() {
        if (this.index < this.tokens.length) {
            return this.tokens[this.index];
        }
        return {};
    }

    next() {
        this.index++;
    }
}