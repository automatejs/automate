import * as utils from '../utils';
import { Message } from '../core';
import { roles } from './roles';

var pattern = /^[a-z_\$][\w\$-]*/i;

// constructor factory, create constructor for component, directive, filter and service
export class Factory {
    constructor() {

    }

    rename(roleId, key) {
        if (pattern.test(key)) {
            var newName = '';
            var segments = key.split('-');

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
            throw new Error(key + 'is not a valid name');
        }
    }

    make(roleId, metadata) {
        var constructor, constructorName = this.rename(roleId, metadata.key),
            onConstruct = function () {
                if (utils.isFunction(constructor.super)) {
                    constructor.super.call(this);
                }
                // create properties
                if (utils.isFunction(metadata.construct)) {
                    metadata.construct.call(this, Message);
                }
            };

        constructor = new Function('onConstruct', '"use strict";return function ' + constructorName + '(){onConstruct.call(this);};')(onConstruct);

        // extends class
        if (utils.isFunction(metadata.extends)) {
            utils.inherit(constructor, metadata.extends);
        }

        // create methods
        if (utils.isObject(metadata.methods)) {
            utils.extend(constructor.prototype, metadata.methods);
        }

        return constructor;
    }

    makeComponent(metadata) {
        return this.make(roles.component, metadata);
    }

    makeDirective(metadata) {
        return this.make(roles.directive, metadata);
    }

    makeFilter(metadata) {
        return this.make(roles.filter, metadata);
    }

    makeService(metadata) {
        return this.make(roles.service, metadata);
    }
}

export var factory = new Factory();