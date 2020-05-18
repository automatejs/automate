export class AstNode {
    constructor(type) {
        this.type = type;
        this.childNodes = [];
    }

    appendChild(child) {
        this.childNodes.push(child);
    }
}