import { parseExp } from '../exp';
import { parseTpl } from '../tpl';

export class Parser {
    get injector() {
        return this.scope.$injector;
    }

    get nsAlias() {
        return this.scope.$data.alias;
    }

    constructor(scope) {
        this.scope = scope;
        this.programs = {};
        this.type = {
            components: {},
            directives: {}
        };
        this.filters = {};
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

    resolveComponent(name) {
        var identifier, component,
            buffer = this.type.components;

        if (buffer[name] !== undefined) {
            component = buffer[name];
        } else {
            identifier = this.injector.parseFullName(name, this.nsAlias);
            component = this.injector.getComponent(identifier.key, identifier.ns);
            buffer[name] = component;
        }

        return component;
    }

    resolveDirective(name) {
        var identifier, directive,
            buffer = this.type.directives;

        if (buffer[name] !== undefined) {
            directive = buffer[name];
        } else {
            identifier = this.injector.parseFullName(name, this.nsAlias);
            directive = this.injector.getDirective(identifier.key, identifier.ns);
            buffer[name] = directive;
        }

        return directive;
    }

    resolveFilter(name) {
        var identifier, filter,
            buffer = this.filters;

        if (buffer[name] !== undefined) {
            filter = buffer[name];
        } else {
            identifier = this.injector.parseFullName(name, this.nsAlias);
            filter = this.injector.createFilter(identifier.key, identifier.ns);
            buffer[name] = filter;
        }

        return filter;
    }

    destroy() {
        this.scope = null;
    }
}