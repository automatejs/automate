import * as utils from '../utils';
import { isMessage, Message } from '../core';
import { Observer } from '../observer';
import { Render } from '../render';
import { injector } from './injector';
import { Delayer } from './delayer';
import { Evaluator } from '../exp';

export function componentConstructor(data) {
    this.$$data = null;
    this.$$velm = null;
    this.$$fragment = null;
    this.$$bindings = [];
    this.$$parent = null;
    this.$$children = [];
    this.$$directives = [];
    this.$$injector = injector;
    this.$$render = new Render(this);
    this.$$observer = new Observer(this);
    this.$$evaluator = new Evaluator(this);
    this.$$delayer = new Delayer(this.$$doPatch);
    this.$display = 'block';
    this.$setData(data);
    injector.injectServices(this);
}

export class Component {
    constructor(data) {
        componentConstructor.call(this, data);
    }

    $setData(data) {
        if (data != null) {
            // create properties
            if (utils.isFunction(data.construct)) {
                data.construct.call(this, Message);
            }
            // create methods
            if (utils.isObject(data.methods)) {
                utils.extend(this, data.methods);
            }
        }

        this.$$data = utils.merge(this.$$metadata, data);
    }

    $hasComponent(key) {
        return this.$$injector.hasComponent(key);
    }

    $newComponent(key) {
        var child = this.$$injector.createComponent(key);
        child.$$parent = this;
        this.$$children.push(child);
        return child;
    }

    $hasDirective(key) {
        return this.$$injector.hasDirective(key);
    }

    $newDirective(key) {
        var directive = this.$$injector.createDirective(key);
        directive.$$scope = this;
        this.$$directives.push(directive);
        return directive;
    }

    $hasFilter(key) {
        return this.$$injector.hasFilter(key);
    }

    $getFilter(key) {
        return  this.$$injector.createFilter(key);
    }

    $hasAttribute(key) {
        return utils.hasProperty(this, key, true);
    }

    $setAttribute(key, value) {
        var oldValue = utils.getProperty(this, key, true);

        if (oldValue !== value) {
            utils.setProperty(this.delegate(), key, value, true);
        }
    }

    $bind(message, handler) {
        var message = utils.getProperty(this, message, true);

        if (isMessage(message)) {
            message.on(handler);
        }
        else {
            throw new Error(message + ' is not a message');
        }
    }

    $unbind(event, handler) {
        var message = utils.getProperty(this, message, true);

        if (isMessage(message)) {
            message.off(handler);
        }
        else {
            throw new Error(message + ' is not a message');
        }
    }

    $watch(key, action) {
        return this.$$observer.watch(this, key, action);
    }

    $validate(key, action) {
        return this.$$observer.validate(this, key, action);
    }

    $watchExp(exp, handler) {
        return this.$$observer.watchExp(this, exp, handler);
    }

    $watchCollection(exp, handler) {
        return this.$$observer.watchCollection(this, exp, handler);
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

    $patch() {
        this.$$delayer.execute(this);
    }

    $$doPatch() {
        this.$$bindings.forEach(e => {
            e.patch();
        });
    }

    $destroy() {
        this.$$delayer.destroy();
        this.$$observer.destroy();

        this.$$children.forEach(child => {
            child.$destroy();
        });

        this.$$directives.forEach(item => {
            item.$destroy();
        });

        this.$$bindings.forEach(item => {
            item.destroy();
        });

        this.onDestroy && this.onDestroy();
        this.$$parent = null;
        this.$$children.length = 0;
        this.$$directives.length = 0;
        this.$$bindings.length = 0;
    }
}