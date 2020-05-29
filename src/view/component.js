import * as utils from '../utils';
import { isMessage } from '../core';
import { Observer, handler } from '../observer';
import { Renderer } from '../render';
import { injector } from './injector';
import { Evaluator } from '../exp';

export function componentConstructor(data) {
    this.$$velm = null;
    this.$$view = null;
    this.$$parent = null;
    this.$$children = [];
    this.$$directives = [];
    this.$$data = this.$initData(data);
    this.$$injector = injector;
    this.$$renderer = new Renderer(this);
    this.$$observer = new Observer(this);
    this.$$evaluator = new Evaluator(this);
    this.slots = {};
    this.events = {};
    this.props = this.$delegate({});
    this.state = this.$delegate({});
    injector.injectServices(this, this.$$data);
}

export class Component {
    $delegate(target) {
        return new Proxy(target, handler);
    }

    $setSlot(slots) {
        this.slots = slots || {};
    }

    $setState(state) {
        this.state = this.$delegate(state);
    }

    $setProps(props) {
        this.props = this.$delegate(props);
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

    $getNsAlias() {
        return this.$$data.alias;
    }

    $parseFullName(fullName) {
        return this.$$injector.parseFullName(fullName, this.$getNsAlias());
    }

    $getComponent(key, namespace) {
        return this.$$injector.getComponent(key, namespace);
    }

    $newComponent(cls) {
        var child = this.$$injector.createComponent(cls);
        child.$$parent = this;
        this.$$children.push(child);
        return child;
    }

    $getDirective(key, namespace) {
        return this.$$injector.getDirective(key, namespace);
    }

    $newDirective(cls) {
        var directive = this.$$injector.createDirective(cls);
        directive.$$scope = this;
        this.$$directives.push(directive);
        return directive;
    }

    $getFilter(fullName) {
        var identifier = this.$parseFullName(fullName);
        return this.$$injector.createFilter(identifier.key, identifier.ns);
    }

    $hasProperty(key) {
        // return utils.hasProperty(this.props, key, true);
        return this.$getProperty(key) !== undefined;
    }

    $getProperty(key) {
        return utils.getProperty(this.props, key, true);
    }

    $setProperty(key, value) {
        var oldValue = utils.getProperty(this.props, key, true);

        if (oldValue !== value) {
            utils.setProperty(this.props, key, value, true);
        }
    }

    $hasMessage(key) {
        return utils.hasProperty(this.events, key, true);
    }

    $bind(key, handler) {
        var message = utils.getProperty(this.events, key, true);

        if (isMessage(message)) {
            message.on(handler);
        } else {
            throw new Error(utils.format('"{0}" is not a valid event', key));
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

    $eval(exp, locals) {
        return this.$$evaluator.evaluate(exp, locals);
    }

    $assign(exp, value, locals) {
        return this.$$evaluator.assign(exp, value, locals);
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
        this.$$view = this.$$renderer.render(template);
        return this.$$view;
    }

    $mount(selectorOrElement) {
        var element;

        if (utils.isString(selectorOrElement)) {
            element = document.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }

        element.appendChild(this.$$view);
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