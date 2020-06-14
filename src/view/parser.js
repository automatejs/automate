import * as utils from '../utils';
import { parseExp } from '../exp';
import { parseTpl } from '../tpl';

export class Parser {
    get injector() {
        return this.scope.$injector;
    }

    get using() {
        return this.scope.$data.using;
    }

    constructor(scope) {
        this.scope = scope;
        this.programs = {};
        this.type = {
            components: {},
            directives: {},
            filters: {}
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

    resolve(selector, buffer, loader) {
        var target, fullName, defaultNs = this.scope.$data.namespace;

        if (buffer[selector] !== undefined) {
            target = buffer[selector];
        } else {
            fullName = utils.convertToHumpName(selector, '-');
            target = this.injector.parseComponent(fullName, this.using, defaultNs);
            buffer[selector] = target;
        }

        return target;
    }

    resolveComponent(selector) {
        return this.resolve(selector, this.type.components, 'getComponent');
    }

    resolveDirective(selector) {
        return this.resolve(selector, this.type.directives, 'getDirective');
    }

    resolveFilter(selector) {
        var filter, filterCls, buffer = this.filters;

        if (buffer[selector] !== undefined) {
            filter = buffer[selector];
        } else {
            filterCls = this.resolve(selector, this.type.filters, 'getFilter');
            filter = this.injector.createFilter(filterCls);
            buffer[selector] = filter;
        }

        return filter;
    }

    destroy() {
        this.scope = null;
    }
}