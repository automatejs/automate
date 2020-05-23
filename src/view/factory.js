import * as utils from '../utils';
import { Message } from '../core';
import { roles } from './roles';
import { Component, componentConstructor } from './component';
import { Directive, directiveConstructor } from './directive';
import { Filter, filterConstructor } from './filter';
import { Service, serviceConstructor } from './service';

var pattern = /^[a-z_\$][\w\$-]*/i;

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

// constructor factory, create constructor for component, directive, filter and service
export class Factory {
    constructor() {

    }

    rename(roleId, name) {
        if (pattern.test(name)) {
            var newName = '';
            var segments = name.split('-');

            segments.forEach(function (segment) {
                newName += utils.uppercase(segment[0]) + segment.substring(1);
            });

            switch (roleId) {
                case roles.component:
                    newName += 'Component';
                    break;
                case roles.directive:
                    newName += 'Directive';
                    break;
                case roles.filter:
                    newName += 'Filter';
                    break;
                case roles.service:
                    newName += 'Service';
                    break;
            }

            return newName;
        } else {
            throw new Error(name + 'is not a valid name');
        }
    }

    make(roleId, name, config, metadata) {
        var constructor, constructorName = this.rename(roleId, name),
            onConstruct = function () {
                if (utils.isFunction(constructor.super)) {
                    constructor.super.call(this);
                }
                // create properties
                if (utils.isFunction(config.construct)) {
                    config.construct.call(this, Message);
                }
            };

        constructor = new Function('onConstruct', '"use strict";return function ' + constructorName + '(){onConstruct.call(this);};')(onConstruct);

        // extends class
        if (utils.isFunction(config.extends)) {
            utils.inherit(constructor, config.extends);
        }

        // create methods
        for (var key in config) {
            if (config.hasOwnProperty(key) && key !== 'extends' && key !== 'construct') {
                constructor.prototype[key] = config[key];
            }
        }

        // store metadata to prototype
        metadata.key = name;
        constructor.prototype.$$metadata = metadata;

        return constructor;
    }

    makeComponent(name, config, metadata) {
        config.extends = componentClass;
        return this.make(roles.component, name, config, metadata);
    }

    makeDirective(name, config, metadata) {
        config.extends = directiveClass;
        return this.make(roles.directive, name, config, metadata);
    }

    makeFilter(name, config, metadata) {
        config.extends = filterClass;
        return this.make(roles.filter, name, config, metadata);
    }

    makeService(name, config, metadata) {
        config.extends = serviceClass;
        return this.make(roles.service, name, config, metadata);
    }
}

export var factory = new Factory();