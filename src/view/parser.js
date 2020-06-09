import * as utils from '../utils';
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

    resolveComponent(selector) {
        var identifier, component, fullName,
            buffer = this.type.components;

        if (buffer[selector] !== undefined) {
            component = buffer[selector];
        } else {
            fullName = utils.convertToHumpName(selector, '-');
            identifier = this.injector.parseFullName(fullName, this.nsAlias);
            component = this.injector.getComponent(identifier.key, identifier.ns || this.scope.$data.namespace);
            buffer[selector] = component;
        }

        return component;
    }

    resolveDirective(selector) {
        var identifier, directive, fullName,
            buffer = this.type.directives;

        if (buffer[selector] !== undefined) {
            directive = buffer[selector];
        } else {
            fullName = utils.convertToHumpName(selector, '-');
            identifier = this.injector.parseFullName(fullName, this.nsAlias);
            directive = this.injector.getDirective(identifier.key, identifier.ns || this.scope.$data.namespace);
            buffer[selector] = directive;
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
            filter = this.injector.createFilter(identifier.key, identifier.ns || this.scope.$data.namespace);
            buffer[name] = filter;
        }

        return filter;
    }

    destroy() {
        this.scope = null;
    }
}