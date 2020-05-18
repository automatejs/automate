import {
    AST,
    AssignmentExpressionNode,
    BinaryExpressionNode,
    CallExpressionNode,
    ConditionalExpressionNode,
    ExpressionStatementNode,
    IdentifierNode,
    LiteralNode,
    LogicalExpressionNode,
    MemberExpressionNode,
    ObjectExpressionNode,
    ProgramNode,
    PropertyNode,
    UnaryExpressionNode,
    ArrayExpressionNode
} from './model';
import { ExpLexer } from './exp-lexer';
import { parseOptions } from './parse-options';
import * as utils from '../utils';

export class ExpParser {
    constructor(lexer, options) {
        this.lexer = lexer;
        this.options = utils.merge(parseOptions, options);
    }

    throwError(msg, token) {
        throw new Error('Syntax Error: Token \'' + token.text + '\'' + msg + ' at column ' + (token.index + 1) +
            ' of the expression [' + this.text + '] starting at [' + this.text.substring(token.index) + '].');
    }

    parse(text) {
        this.text = text;
        this.tokens = this.lexer.lex(text);

        var value = this.program();

        if (this.tokens.length !== 0) {
            this.throwError('is an unexpected token', this.tokens[0]);
        }

        return value;
    }

    program() {
        var program = new ProgramNode();
        while (true) {
            if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']')) {
                program.appendChild(this.expressionStatement());
            }
            if (!this.expect(';')) {
                return program;
            }
        }
    }

    expressionStatement() {
        var exp = new ExpressionStatementNode();
        exp.appendChild(this.filterChain());
        return exp;
    }

    filterChain() {
        var left = this.expression();
        while (this.expect('|')) {
            left = this.filter(left);
        }
        return left;
    }

    expression() {
        return this.assignment();
    }

    isAssignable(ast) {
        return ast.type === AST.Identifier || ast.type === AST.MemberExpression;
    }

    assignment() {
        var result = this.ternary();
        if (this.expect('=')) {
            if (!this.isAssignable(result)) {
                throw new Error('Trying to assign a value to a non l-value');
            }

            result = new AssignmentExpressionNode(result, this.assignment(), '=');
        }
        return result;
    }

    ternary() {
        var test = this.logicalOR();
        var alternate;
        var consequent;
        if (this.expect('?')) {
            alternate = this.expression();
            if (this.consume(':')) {
                consequent = this.expression();
                return new ConditionalExpressionNode(test, alternate, consequent);
            }
        }
        return test;
    }

    logicalOR() {
        var left = this.logicalAND();
        while (this.expect('||')) {
            left = new LogicalExpressionNode('||', left, this.logicalAND());
        }
        return left;
    }

    logicalAND() {
        var left = this.equality();
        while (this.expect('&&')) {
            left = new LogicalExpressionNode('&&', left, this.equality());
        }
        return left;
    }

    equality() {
        var left = this.relational();
        var token;
        while ((token = this.expect('==', '!=', '===', '!=='))) {
            left = new BinaryExpressionNode(token.text, left, this.relational());
        }
        return left;
    }

    relational() {
        var left = this.additive();
        var token;
        while ((token = this.expect('<', '>', '<=', '>='))) {
            left = new BinaryExpressionNode(token.text, left, this.additive());
        }
        return left;
    }

    additive() {
        var left = this.multiplicative();
        var token;
        while ((token = this.expect('+', '-'))) {
            left = new BinaryExpressionNode(token.text, left, this.multiplicative());
        }
        return left;
    }

    multiplicative() {
        var left = this.unary();
        var token;
        while ((token = this.expect('*', '/', '%'))) {
            left = new BinaryExpressionNode(token.text, left, this.unary());
        }
        return left;
    }

    unary() {
        var token;
        if ((token = this.expect('+', '-', '!'))) {
            return new UnaryExpressionNode(token.text, this.unary());
        } else {
            return this.primary();
        }
    }

    primary() {
        var primary;
        if (this.expect('(')) {
            primary = this.filterChain();
            this.consume(')');
        } else if (this.expect('[')) {
            primary = this.arrayDeclaration();
        } else if (this.expect('{')) {
            primary = this.object();
        } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
            primary = new LiteralNode(this.options.literals[this.consume().text]);
        } else if (this.peek().identifier) {
            primary = this.identifier();
        } else if (this.peek().constant) {
            primary = this.constant();
        } else {
            this.throwError('not a primary expression', this.peek());
        }

        var next;
        while (this.peek('(', '[', '.') || (this.peek('?') && this.peekAhead(1, '.'))) {
            if (this.expect('?')) {
                primary.allowNull = true;
            }

            next = this.expect('(', '[', '.');

            if (next.text === '(') {
                primary = new CallExpressionNode(primary, this.parseArguments());
                this.consume(')');
            } else if (next.text === '[') {
                primary = new MemberExpressionNode(primary, this.expression(), true);
                this.consume(']');
            } else if (next.text === '.') {
                primary = new MemberExpressionNode(primary, this.identifier(), false);
            } else {
                this.throwError('IMPOSSIBLE');
            }
        }
        return primary;
    }

    filter(baseExpression) {
        var args = [baseExpression], identifiers = [this.identifier()];

        while (this.expect('.')) {
            identifiers.push(this.identifier());
        }

        // plus namespace
        var entireName = identifiers.map(function (item) {
            return item.name;
        }).join('.');

        var result = new CallExpressionNode(new IdentifierNode(entireName), args);

        result.filter = true;

        while (this.expect(':')) {
            args.push(this.expression());
        }

        return result;
    }

    parseArguments() {
        var args = [];
        if (this.peekToken().text !== ')') {
            do {
                args.push(this.filterChain());
            } while (this.expect(','));
        }
        return args;
    }

    identifier() {
        var token = this.consume();
        if (!token.identifier) {
            this.throwError('is not a valid identifier', token);
        }
        return new IdentifierNode(token.text);
    }

    constant() {
        // TODO check that it is a constant
        return new LiteralNode(this.consume().value);
    }

    arrayDeclaration() {
        var arr = new ArrayExpressionNode();
        if (this.peekToken().text !== ']') {
            do {
                if (this.peek(']')) {
                    // Support trailing commas per ES5.1.
                    break;
                }
                arr.appendChild(this.expression());
            } while (this.expect(','));
        }
        this.consume(']');

        return arr;
    }

    object() {
        var properties = [], property;
        if (this.peekToken().text !== '}') {
            do {
                if (this.peek('}')) {
                    // Support trailing commas per ES5.1.
                    break;
                }
                property = new PropertyNode();
                if (this.peek().constant) {
                    property.key = this.constant();
                    property.computed = false;
                    this.consume(':');
                    property.value = this.expression();
                } else if (this.peek().identifier) {
                    property.key = this.identifier();
                    property.computed = false;
                    if (this.peek(':')) {
                        this.consume(':');
                        property.value = this.expression();
                    } else {
                        property.value = property.key;
                    }
                } else if (this.peek('[')) {
                    this.consume('[');
                    property.key = this.expression();
                    this.consume(']');
                    property.computed = true;
                    this.consume(':');
                    property.value = this.expression();
                } else {
                    this.throwError('invalid key', this.peek());
                }
                properties.push(property);
            } while (this.expect(','));
        }
        this.consume('}');

        return new ObjectExpressionNode(properties);
    }

    consume(e1) {
        if (this.tokens.length === 0) {
            throw new Error('Unexpected end of expression: ' + this.text);
        }

        var token = this.expect(e1);
        if (!token) {
            this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
        }
        return token;
    }

    peekToken() {
        if (this.tokens.length === 0) {
            throw new Error('Unexpected end of expression: ' + this.text);
        }
        return this.tokens[0];
    }

    peek(e1, e2, e3, e4) {
        return this.peekAhead(0, e1, e2, e3, e4);
    }

    peekAhead(i, e1, e2, e3, e4) {
        if (this.tokens.length > i) {
            var token = this.tokens[i];
            var t = token.text;
            if (t === e1 || t === e2 || t === e3 || t === e4 ||
                (!e1 && !e2 && !e3 && !e4)) {
                return token;
            }
        }
        return false;
    }

    expect(e1, e2, e3, e4) {
        var token = this.peek(e1, e2, e3, e4);
        if (token) {
            this.tokens.shift();
            return token;
        }
        return false;
    }
}

