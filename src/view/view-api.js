import { factory } from './factory';
import { injector } from './injector';
import * as dom from '../dom';
import { Component } from './component';
import { Directive } from './directive';
import { Filter } from './filter';
import { Service } from './service';

function namespace(name) {
    return {
        component: function (key, config, metadata) {
            metadata.namespace = name;
            return component(key, config, metadata);
        },
        directive: function (key, config, metadata) {
            metadata.namespace = name;
            return directive(key, config, metadata);
        },
        service: function (key, config, metadata) {
            metadata.namespace = name;
            return service(key, config, metadata);
        },
        filter: function (key, config, metadata) {
            metadata.namespace = name;
            return filter(key, config, metadata);
        }
    };
}

function component(key, config, metadata) {
    var constructor = factory.makeComponent(key, config, metadata);
    injector.registerComponent(key, constructor);
    return constructor;
}

function directive(key, config, metadata) {
    var constructor = factory.makeDirective(key, config, metadata);
    injector.registerDirective(key, constructor);
    return constructor;
}

function filter(key, config, metadata) {
    var constructor = factory.makeFilter(key, config, metadata);
    injector.registerFilter(key, constructor);
    return constructor;
}

function service(key, config, metadata) {
    var constructor = factory.makeService(key, config, metadata);
    injector.registerService(key, constructor);
    return constructor;
}

function isComponent(instance) {
    return instance instanceof Component;
}

function isDirective(instance) {
    return instance instanceof Directive;
}

function isFilter(instance) {
    return instance instanceof Filter;
}

function isService(instance) {
    return instance instanceof Service;
}

function render(selector, config) {
    var element = document.querySelector(selector);
    var Root = factory.makeComponent('root', config, {
        template: element.innerHTML
    });
    var root = new Root();
    
    dom.clearChildrenOfElement(element);
    root.$render();
    root.$mount(element);
}

export {
    Component,
    Directive,
    Filter,
    Service,
    isComponent,
    isDirective,
    isFilter,
    isService,
    namespace,
    render,
    injector
};