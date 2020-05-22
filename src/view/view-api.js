import { Component, componentConstructor } from './component';
import { Directive, directiveConstructor } from './directive';
import { Filter, filterConstructor } from './filter';
import { Service, serviceConstructor } from './service';
import { factory } from './factory';
import { injector } from './injector';
import * as helper from '../helper';
import * as utils from '../utils';

// start make constructor function because class can't be call without new.
var componentClass = (function () {
    return function Component(metadata) {
        componentConstructor.call(this, metadata);
    };
})();
componentClass.prototype = Component.prototype;

var directiveClass = (function () {
    return function Directive(metadata) {
        directiveConstructor.call(this, metadata);
    };
})();
directiveClass.prototype = Directive.prototype;

var filterClass = (function () {
    return function Filter(metadata) {
        filterConstructor.call(this, metadata);
    };
})();
filterClass.prototype = Filter.prototype;

var serviceClass = (function () {
    return function Service(metadata) {
        serviceConstructor.call(this, metadata)
    };
})();
serviceClass.prototype = Service.prototype;
// end of make constructor function because class can't be call without new.

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
    config.extends = componentClass;
    var constructor = factory.makeComponent(key, config);
    injector.registerComponent(key, constructor, metadata);
    return constructor;
}

function directive(key, config, metadata) {
    config.extends = directiveClass;
    var constructor = factory.makeDirective(key, config);
    injector.registerDirective(key, constructor, metadata);
    return constructor;
}

function filter(key, config, metadata) {
    config.extends = filterClass;
    var constructor = factory.makeFilter(key, config);
    injector.registerFilter(key, constructor, metadata);
    return constructor;
}

function service(key, config, metadata) {
    config.extends = serviceClass;
    var constructor = factory.makeService(key, config);
    injector.registerService(key, constructor, metadata);
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

function bootstrap(selector, config) {
    config.extends = componentClass;
    var element = document.querySelector(selector);
    var App = factory.makeComponent('root', config);
    var app = new App();
    app.$setData({
        template: element.innerHTML
    });
    helper.clearChildNodes(element);
    app.$render();
    app.$mount(element);
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
    bootstrap,
    injector
};