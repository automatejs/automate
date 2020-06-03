import * as utils from '../utils';
import { isMessage } from '../core';
import { Parser } from './parser';
import { Observer, handler } from '../observer';
import { Renderer } from '../render';
import { injector } from './injector';
import { Evaluator } from '../exp';

export function componentConstructor(data) {
    this.$$velm = null;
    this.$$parent = null;
    this.$$children = [];
    this.$$renderer = null;
    this.$$observer = new Observer(this);
    this.$injector = injector;
    this.$parser = new Parser();
    this.$evaluator = new Evaluator(this);
    this.slots = {};
    this.events = {};
    this.props = this.$delegate({});
    this.state = this.$delegate({});
    this.$data = utils.merge(this.$$metadata, data);
    injector.injectServices(this, this.$data);
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

    constructor(data) {
        componentConstructor.call(this, data);
    }

    $getFilter(fullName) {
        var identifier = this.$injector.parseFullName(fullName, this.$data.alias);
        return this.$injector.createFilter(identifier.key, identifier.ns);
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
        return this.$evaluator.evaluate(exp, locals);
    }

    $assign(exp, value, locals) {
        return this.$evaluator.assign(exp, value, locals);
    }

    $getTemplate() {
        var data = this.$data;

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
        this.$$renderer = new Renderer(this, template);
        this.$$renderer.render();
        return this.$$renderer;
    }

    $mount(selectorOrElement) {
        var element;

        if (utils.isString(selectorOrElement)) {
            element = document.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }

        if(this.$$renderer == null) {
            throw new Error('current component is not rendered');
        }

        element.appendChild(this.$$renderer.view);
    }

    $unmount() {

    }

    $appendChild(child) {
        this.$$children.push(child);
        child.$$parent = this;
    }

    $removeChild(child) {
        var index = this.$$children.indexOf(child);

        if (index !== -1) {
            this.$$children.splice(index, 1);
            child.$$parent = null;
        }
    }

    $destroy() {
        this.$$observer.destroy();

        if(this.$$renderer != null) {
            this.$$renderer.destroy();
        }

        this.onDestroy && this.onDestroy();

        if(this.$$parent != null) {
            this.$$parent.$removeChild(this);
        }
    }
}