import * as utils from '../utils';
import { roles } from './roles';

// metadata example
// { key: '', namespace: '', extends: null, construct: fn, methods: {} }
export class Injector {
    constructor() {
        this.classContainer = {};
        this.instanceContainer = {};
        this.serviceStack = [];
    }

    getClassContainer(roleId) {
        if (!this.classContainer[roleId]) {
            this.classContainer[roleId] = {};
        }
        return this.classContainer[roleId];
    }

    getInstanceContainer(roleId) {
        if (!this.instanceContainer[roleId]) {
            this.instanceContainer[roleId] = [];
        }
        return this.instanceContainer[roleId];
    }

    register(roleId, key, constructor) {
        if (key.indexOf('.') !== -1) {
            throw new Error('Illegal character "."');
        }

        var container = this.getClassContainer(roleId);

        if (container[key] == null) {
            container[key] = [];
        }
        else {
            var matches = container[key].filter(function (item) {
                return item.prototype.$$metadata.namespace === constructor.prototype.$$metadata.namespace;
            });

            if (matches.length > 0) {
                throw new Error(key + ' is exist under namespace ' + matches[0].prototype.$$metadata.namespace);
            }
        }

        container[key].push(constructor);
    }

    registerComponent(key, constructor, metadata) {
        this.register(roles.component, key, constructor, metadata);
    }

    registerDirective(key, constructor, metadata) {
        this.register(roles.directive, key, constructor, metadata);
    }

    registerFilter(key, constructor, metadata) {
        this.register(roles.filter, key, constructor, metadata);
    }

    registerService(key, constructor, metadata) {
        this.register(roles.service, key, constructor, metadata);
    }

    has(roleId, key, ignoreCase, namespace) {
        var constructors, container = this.getClassContainer(roleId);

        if (ignoreCase) {
            constructors = utils.getProperty(container, key, true);
        }
        else {
            constructors = container[key];
        }

        if (constructors == null) {
            return false;
        }

        if (namespace && constructors.length > 0) {
            constructors = constructors.filter(function (item) {
                var meta = item.prototype.$$metadata;
                return meta.namespace && utils.lowercase(meta.namespace) === utils.lowercase(namespace);
            });

            if (constructors.length === 0) {
                return false;
            }
        }

        return true;
    }

    hasComponent(key, namespace) {
        return this.has(roles.component, key, true, namespace);
    }

    hasDirective(key, namespace) {
        return this.has(roles.directive, key, true, namespace);
    }

    hasFilter(key, namespace) {
        return this.has(roles.filter, key, true, namespace);
    }

    hasService(key, namespace) {
        return this.has(roles.service, key, true, namespace);
    }

    get(roleId, key, ignoreCase, namespace) {
        var constructors, container = this.getClassContainer(roleId);

        if (ignoreCase) {
            constructors = utils.getProperty(container, key, true);
        }
        else {
            constructors = container[key];
        }

        if (constructors == null) {
            return null;
        }

        if (namespace && constructors.length > 0) {
            constructors = constructors.filter(function (item) {
                var meta = item.prototype.$$metadata;
                return meta.namespace && utils.lowercase(meta.namespace) === utils.lowercase(namespace);
            });

            if (constructors.length === 0) {
                return null;
            }
        }

        if (constructors.length > 1) {
            var namespaces = constructors.map(function (item) {
                return item.prototype.$$metadata.namespace;
            });
            throw new Error('namespace ' + namespaces.join('|') + ' all have ' + key);
        }

        return constructors[0];
    }

    getComponent(key, namespace) {
        return this.get(roles.component, key, namespace);
    }

    getDirective(key, namespace) {
        return this.get(roles.directive, key, namespace);
    }

    getFilter(key, namespace) {
        return this.get(roles.filter, key, namespace);
    }

    getService(key, namespace) {
        return this.get(roles.service, key, namespace);
    }

    create(roleId, keyOrConstructor, namespace) {
        var constructor;

        if (utils.isString(keyOrConstructor)) {
            constructor = this.get(roleId, keyOrConstructor, namespace);

            if (constructor == null) {
                throw new Error('miss constructor for key ' + keyOrConstructor);
            }
        } else if (utils.isFunction(keyOrConstructor)) {
            constructor = keyOrConstructor;
        } else {
            throw new Error('Invalid parameter');
        }

        return new constructor();
    }

    createComponent(keyOrConstructor, namespace) {
       return this.create(roles.component, keyOrConstructor, namespace);
    }

    createDirective(keyOrConstructor, namespace) {
        return this.create(roles.directive, keyOrConstructor, namespace);
    }

    createFilter(keyOrConstructor, namespace) {
        var instance, container = this.getInstanceContainer(roles.filter);

        if (utils.isString(keyOrConstructor)) {
            keyOrConstructor = this.getFilter(keyOrConstructor, namespace);
        }

        var result = container.filter(function (item) {
            return item instanceof keyOrConstructor;
        });

        if (result.length) {
            instance = result[0];
        } else {
            instance = new keyOrConstructor();
            container.push(instance);
        }

        return instance;
    }

    createService(keyOrConstructor, namespace) {
        var instance, container = this.getInstanceContainer(roles.service);

        if (utils.isString(keyOrConstructor)) {
            keyOrConstructor = this.getService(keyOrConstructor, namespace);
        }

        if (!keyOrConstructor.prototype.$$metadata.nonShared) {
            var result = container.filter(function (item) {
                return item instanceof keyOrConstructor;
            });

            if (result.length) {
                instance = result[0];
            }
        }

        if (!instance) {
            instance = new keyOrConstructor();
            container.push(instance);
        }

        return instance;
    }

    parseFullName(name, alias) {
        var result = {ns: '', key: ''},
            segments = name.split('.');

        if (segments.length === 1) {
            result.key = name;
        } else {
            result.key = segments.pop();
            result.ns = segments.join('.');

            if (alias) {
                utils.some(alias, function (shortName, fullName) {
                    if (shortName === result.ns) {
                        result.ns = fullName;
                        return true;
                    }
                });
            }
        }

        return result;
    }

    injectServices(instance, metadata, checkLoopDependency) {
        var self = this, serviceFullName, hasLoopDependency = false;

        if(checkLoopDependency) {
            // creating a service instance at the moment
            serviceFullName = utils.format('{0}.{1}', metadata.namespace, metadata.key);
            hasLoopDependency = this.serviceStack.indexOf(serviceFullName) !== -1;

            this.serviceStack.push(serviceFullName);

            if (hasLoopDependency) {
                // clear service dependency stack
                this.serviceStack.length = 0;
                // occurs loop dependency
                throw new Error("Loop dependency: " + this.serviceStack.join('->'));
            }
        }

        if (metadata && utils.isObject(metadata.inject)) {
            utils.forEach(metadata.inject, function (service, key) {
                Object.defineProperty(instance, key, {
                    enumerable: false,
                    configurable: false,
                    get: function () {
                        var privateKey = '$$' + key;

                        if (instance[privateKey] == null) {
                            if (utils.isString(service)) {
                                var identifier = self.parseFullName(service, metadata.alias);
                                instance[privateKey] = self.createService(identifier.key, identifier.ns);
                            } else {
                                instance[privateKey] = self.createService(service);
                            }
                        }

                        return instance[privateKey];
                    }
                });
            });
        }

        if(checkLoopDependency) {
            this.serviceStack.pop();
        }
    }
}

export var injector = new Injector();