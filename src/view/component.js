import * as utils from '../utils';
import { isMessage } from '../core';
import { Observer } from '../observer';
import { Render } from '../render';
import { injector } from './injector';
import { Evaluator } from '../exp';

export function componentConstructor(data) {
    this.props = {};
    this.events = {};
    this.$$velm = null;
    this.$$fragment = null;
    this.$$parent = null;
    this.$$children = [];
    this.$$directives = [];
    this.$$injector = injector;
    this.$$render = new Render(this);
    this.$$observer = new Observer(this);
    this.$$evaluator = new Evaluator(this);
    this.$display = 'inherit';
    this.$$data = this.$initData(data);
    injector.injectServices(this, this.$$data);
}

export class Component {
    delegate(target) {
        if (target == null) {
            target = this;
        }

        if (utils.isObject(target)) {
            return target.toProxy();
        }

        throw new Error('target is not a object');
    }

    constructor() {
        componentConstructor.call(this);
    }

    $initData(data) {
        return utils.merge(this.$$metadata, data);
    }

    $setData(data) {
        utils.extend(this.$$data, data);
    }

    $hasComponent(key) {
        return this.$$injector.hasComponent(key, this.$$data.alias);
    }

    $newComponent(key) {
        var child = this.$$injector.createComponent(key, this.$$data.alias);
        child.$$parent = this;
        this.$$children.push(child);
        return child;
    }

    $hasDirective(key) {
        return this.$$injector.hasDirective(key, this.$$data.alias);
    }

    $newDirective(key) {
        var directive = this.$$injector.createDirective(key, this.$$data.alias);
        directive.$$scope = this;
        this.$$directives.push(directive);
        return directive;
    }

    $hasFilter(key) {
        return this.$$injector.hasFilter(key, this.$$data.alias);
    }

    $getFilter(key) {
        return this.$$injector.createFilter(key, this.$$data.alias);
    }

    $hasProperty(key) {
        return utils.hasProperty(this.props, key, true);
    }

    $getProperty(key) {
        return utils.getProperty(this.props, key, true);
    }

    $setProperty(key, value) {
        var oldValue = utils.getProperty(this.props, key, true);

        if (oldValue !== value) {
            utils.setProperty(this.delegate(this.props), key, value, true);
        }
    }

    $hasMessage(key) {
        return utils.hasProperty(this.events, key, true);
    }

    $bind(key, handler) {
        var message = utils.getProperty(this.events, key, true);

        if (isMessage(message)) {
            message.on(handler);
        }
    }

    $unbind(key, handler) {
        var message = utils.getProperty(this.events, key, true);

        if (isMessage(message)) {
            message.off(handler);
        }
    }

    $watch(exp, handler, locals) {
        return this.$$observer.watch(exp, handler, locals);
    }

    $watchCollection(exp, handler, locals) {
        return this.$$observer.watchCollection(exp, handler, locals);
    }

    $eval(exp) {
        return this.$$evaluator.evaluate(exp);
    }

    $getTemplate() {
        var data = this.$$data;

        if (utils.isString(data.template)) {
            return data.template;
        }

        if (utils.isString(data.templateId)) {
            var elm = document.getElementById(data.templateId);

            if (elm != null) {
                return elm.innerHTML;
            }
        }

        return '';
    }

    $render() {
        var template = this.$getTemplate();
        this.$$fragment = this.$$render.render(template);
        return this.$$fragment;
    }

    $mount(selectorOrElement) {
        var element;

        if (utils.isString(selectorOrElement)) {
            element = document.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }

        element.appendChild(this.$$fragment);
    }

    $unmount() {

    }

    $destroy() {
        this.$$observer.destroy();

        this.$$children.forEach(child => {
            child.$destroy();
        });

        this.$$directives.forEach(item => {
            item.$destroy();
        });

        this.onDestroy && this.onDestroy();
        this.$$parent = null;
        this.$$children.length = 0;
        this.$$directives.length = 0;
    }
}