import * as dom from '../dom';
import * as utils from '../utils';
import { M_HIDE_CLASS } from '../css';
import { injector } from './injector';
import { Renderer } from '../render';

export function directiveConstructor(data) {
    this.$$scope = null;
    this.$$vattr = null;
    this.$priority = 9;
    // binding text is a assignment
    this.$assignment = false;
    this.$placeholder = null;
    this.$data = utils.merge(this.$$metadata, data);
    injector.injectServices(this, this.$data);
}

export class Directive {
    get $key() {
        return this.$$metadata.key;
    }

    get $namespace() {
        return this.$$metadata.namespace;
    }

    get $scope() {
        return this.$$scope;
    }

    get $renderer() {
        return this.$$scope.$renderer;
    }

    get $element() {
        return this.$$vattr.velm.elm;
    }

    get $binding() {
        return this.$$vattr.nodeData.binding;
    }

    get $component() {
        return this.$$vattr.velm.nodeData.component;
    }

    constructor(data) {
        directiveConstructor.call(this, data);
    }

    // while compiling
    $compile() {
        return this.onCompile && this.onCompile(this.$$vattr.velm, this.$$vattr);
    }

    $link() {
        return this.onLink && this.onLink(this.$scope);
    }

    // before linking
    // $prelink() {
    //     this.beforeLink && this.beforeLink();
    // }

    // after linking
    $postlink() {
        this.afterLink && this.afterLink();

        if (this.$binding != null) {
            this.$change(this.$binding.value, this.$binding.oldValue);
        }
    }

    // the input value is changed
    $change(newValue, oldValue) {
        this.onChange && this.onChange(newValue, oldValue);
    }

    $destroy() {
        this.onDestroy && this.onDestroy();
    }

    $$searchDirective(velm, key, namespace) {
        if(!namespace){
            namespace = this.$namespace;
        }

        var result = velm.nodeData.directives.filter(item => item.$key === key && item.$namespace === namespace);

        return result.length ? result[0] : null;
    }

    $seekDirective(key, namespace) {
        var velm = this.$$vattr.velm;
        return this.$$searchDirective(velm, key, namespace);
    }

    $seekUpDirective(key, namespace) {
        var velm = this.$$vattr.velm.parentNode;
        return this.$$searchDirective(velm, key, namespace);
    }

    $removeElement() {
        if (this.$element.parentNode != null) {
            if (this.$placeholder == null) {
                throw new Error('you must define element placeholder!');
            }
            dom.replaceElement(this.$element, this.$placeholder);
        }
    }

    $appendElement() {
        if (this.$element.parentNode == null) {
            if (this.$placeholder == null) {
                throw new Error('you must define element placeholder!');
            }
            dom.replaceElement(this.$placeholder, this.$element);
        }
    }

    $hideElement() {
        dom.addClass(this.$element, M_HIDE_CLASS);
    }

    $showElement() {
        dom.removeClass(this.$element, M_HIDE_CLASS);
    }

    $eval(exp, locals) {
        locals = utils.merge(this.$binding.locals, locals);
        return this.$scope.$eval(exp, locals);
    }

    $assign(exp, value, locals) {
        locals = utils.merge(this.$binding.locals, locals);
        return this.$scope.$assign(exp, value);
    }

    $render(template, locals) {
        return new Renderer(this.$scope, locals).render(template);
    }
}