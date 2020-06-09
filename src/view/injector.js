import * as utils from '../utils';
import { roles } from './roles';

var keyPattern = /^[a-z][a-zA-Z0-9]*$/;
var globalNamespace ='automate';

class NamespaceContainer {
    constructor() {
        this.classContainer = {};
        this.instanceContainer = {};
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
}

// metadata example
// { key: '', namespace: '', extends: null, construct: fn, methods: {} }
export class Injector {
    constructor() {
        this.nsContainer = {};
        this.serviceStack = [];
    }

    getNamespaceContainer(namespace) {
        if (utils.isString(namespace)) {
            namespace = utils.lowercase(namespace);

            if (!this.nsContainer[namespace]) {
                this.nsContainer[namespace] = new NamespaceContainer();
            }

            return this.nsContainer[namespace];
        }
        else {
            throw new Error('namespace is required');
        }
    }

    checkKeyName(key) {
        if (!keyPattern.test(key)) {
            throw new Error(key + ' is not a valid name');
        }
    }

    register(roleId, key, constructor) {
        this.checkKeyName(key);

        var namespace = constructor.prototype.$$metadata.namespace;
        var namespaceContainer = this.getNamespaceContainer(namespace);
        var classContainer = namespaceContainer.getClassContainer(roleId);

        if (namespace === globalNamespace && roleId === roles.directive) {
            key = utils.format('m{0}', utils.uppercase(key[0]) + (key.length > 1 ? key.substr(1) : ''));
        }

        if (classContainer[key]) {
            throw new Error(key + ' is exist under namespace ' + namespace);
        }

        classContainer[key] = constructor;
    }

    registerComponent(key, constructor) {
        this.register(roles.component, key, constructor);
    }

    registerDirective(key, constructor) {
        this.register(roles.directive, key, constructor);
    }

    registerFilter(key, constructor) {
        this.register(roles.filter, key, constructor);
    }

    registerService(key, constructor) {
        this.register(roles.service, key, constructor);
    }

    has(roleId, key, namespace) {
        return this.get(roleId, key, namespace) != null;
    }

    hasComponent(key, namespace) {
        return this.has(roles.component, key, namespace);
    }

    hasDirective(key, namespace) {
        return this.has(roles.directive, key, namespace);
    }

    hasFilter(key, namespace) {
        return this.has(roles.filter, key, namespace);
    }

    hasService(key, namespace) {
        return this.has(roles.service, key, namespace);
    }

    getFromGlobalNamespace(roleId, key) {
        var namespaceContainer = this.getNamespaceContainer(globalNamespace);
        var classContainer = namespaceContainer.getClassContainer(roleId);
        return classContainer[key];
    }

    get(roleId, key, namespace) {
        var namespaceContainer = this.getNamespaceContainer(namespace);
        var classContainer = namespaceContainer.getClassContainer(roleId);
        return classContainer[key] || this.getFromGlobalNamespace(roleId, key);
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
                throw new Error(utils.format('can not find "{0}" in namespace "{1}"', keyOrConstructor, namespace));
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
        var instance, namespaceContainer = this.getNamespaceContainer(namespace),
            container = namespaceContainer.getInstanceContainer(roles.filter), key;

        if (utils.isString(keyOrConstructor)) {
            key = keyOrConstructor;
            keyOrConstructor = this.getFilter(keyOrConstructor, namespace);

            if (keyOrConstructor == null) {
                throw new Error(utils.format('namespace "{0}" has no filter "{1}"', namespace, key));
            }
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
        var instance, namespaceContainer = this.getNamespaceContainer(namespace),
            container = namespaceContainer.getInstanceContainer(roles.service), key;

        if (utils.isString(keyOrConstructor)) {
            key = keyOrConstructor;
            keyOrConstructor = this.getService(keyOrConstructor, namespace);

            if (keyOrConstructor == null) {
                throw new Error(utils.format('namespace "{0}" has no service "{1}"', namespace, key));
            }
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
                utils.some(alias, function (fullName, shortName) {
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
            serviceFullName = utils.format('{0}.{1}', utils.lowercase(metadata.namespace), metadata.key);
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
                                instance[privateKey] = self.createService(identifier.key, identifier.ns || metadata.namespace);
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