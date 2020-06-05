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
    this.$$mainView = null;
    this.$parser = new Parser(this);
    this.$observer = new Observer(this);
    this.slots = {};
    this.events = {};
    this.props = this.$delegate({});
    this.state = this.$delegate({});
    this.$data = utils.merge(this.$$metadata, data);
    injector.injectServices(this, this.$data);
}

export class Component {
    get $injector() {
        return injector;
    }

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

    $hasProperty(key) {
        return utils.hasProperty(this.props, key);
    }

    $getProperty(key) {
        return utils.getProperty(this.props, key);
    }

    $setProperty(key, value) {
        var oldValue = utils.getProperty(this.props, key);

        if (oldValue !== value) {
            utils.setProperty(this.props, key, value);
        }
    }

    $hasMessage(key) {
        return utils.hasProperty(this.events, key);
    }

    $bind(key, handler) {
        var message = utils.getProperty(this.events, key);

        if (isMessage(message)) {
            message.on(handler);
        } else {
            throw new Error(utils.format('"{0}" is not a valid event', key));
        }
    }

    $unbind(key, handler) {
        var message = utils.getProperty(this.events, key);

        if (isMessage(message)) {
            message.off(handler);
        }
    }

    $watch(exp, handler, locals) {
        return this.$observer.watch(exp, handler, locals);
    }

    $watchCollection(exp, handler, locals) {
        return this.$observer.watchCollection(exp, handler, locals);
    }

    $eval(exp, locals) {
        return new Evaluator(this, {locals: locals}).evaluate(exp);
    }

    $assign(exp, value, locals) {
        return new Evaluator(this, {locals: locals}).assign(exp, value);
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
        this.$$mainView = new Renderer(this).render(template);
    }

    $mount(selectorOrElement) {
        if (this.$$mainView == null) {
            throw new Error('current component is not rendered');
        } else {
            this.$$mainView.mount(selectorOrElement);
        }
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
        this.$observer.destroy();

        if(this.$$mainView != null) {
            this.$$mainView.destroy();
        }

        this.onDestroy && this.onDestroy();

        if(this.$$parent != null) {
            this.$$parent.$removeChild(this);
        }
    }
}