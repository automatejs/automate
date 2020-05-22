import * as utils from '../utils';
import { Message } from '../core';
import { roles } from './roles';

var pattern = /^[a-z_\$][\w\$-]*/i;

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

    make(roleId, name, config) {
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

        return constructor;
    }

    makeComponent(name, config) {
        return this.make(roles.component, name, config);
    }

    makeDirective(name, config) {
        return this.make(roles.directive, name, config);
    }

    makeFilter(name, config) {
        return this.make(roles.filter, name, config);
    }

    makeService(name, config) {
        return this.make(roles.service, name, config);
    }
}

export var factory = new Factory();