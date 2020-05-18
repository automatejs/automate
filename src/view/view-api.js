import { Component,  componentConstructor } from './component';
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
        component: function (key, metadata) {
            metadata.namespace = name;
            return component(key, metadata);
        },
        directive: function (key, metadata) {
            metadata.namespace = name;
            return directive(key, metadata);
        },
        service: function (key, metadata) {
            metadata.namespace = name;
            return service(key, metadata);
        },
        filter: function (key, metadata) {
            metadata.namespace = name;
            return filter(key, metadata);
        }
    };
}

function component(key, metadata) {
    metadata.extends = componentClass;
    var constructor = factory.makeComponent(metadata);
    injector.registerComponent(key, constructor, metadata);
    return constructor;
}

function directive(key, metadata) {
    metadata.extends = directiveClass;
    var constructor = factory.makeDirective(metadata);
    injector.registerDirective(key, constructor, metadata);
    return constructor;
}

function filter(key, metadata) {
    metadata.extends = filterClass;
    var constructor = factory.makeFilter(metadata);
    injector.registerFilter(key, constructor, metadata);
    return constructor;
}

function service(key, metadata) {
    metadata.extends = serviceClass;
    var constructor = factory.makeService(metadata);
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

function bootstrap(selector, metadata) {
    var element = document.querySelector(selector);
    var app = new Component(utils.merge({
        template: element.innerHTML
    }, metadata));
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