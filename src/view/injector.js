import * as utils from '../utils';
import { roles } from './roles';
import { isComponent, isDirective, isService, isFilter } from './view-api';

var keyPattern = /^[a-z][a-zA-Z0-9]*$/;
var globalNamespace = 'automate';

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

    checkInstance(roleId, instance) {
        var validator, role;

        switch (roleId) {
            case roles.component:
                role = 'Component';
                validator = isComponent;
                break;
            case roles.directive:
                role = 'Directive';
                validator = isDirective;
                break;
            case roles.service:
                role = 'Service';
                validator = isService;
                break;
            case roles.filter:
                role = 'Filter';
                validator = isFilter;
                break;
        }

        if (validator && !validator(instance)) {
            throw new Error(utils.format('object is a instance of {0}', role));
        }
    }

    resolveConstructor(roleId, keyOrConstructor, namespace) {
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

        return constructor;
    }

    create(roleId, keyOrConstructor, namespace) {
        var Cls = this.resolveConstructor(roleId, keyOrConstructor, namespace);
        var instance = new Cls();

        this.checkInstance(roleId, instance);

        return instance;
    }

    createSingleton(roleId, keyOrConstructor, namespace) {
        var instance,
            Cls = this.resolveConstructor(roleId, keyOrConstructor, namespace),
            namespace = Cls.prototype.$$metadata.namespace;

        var namespaceContainer = this.getNamespaceContainer(namespace),
            container = namespaceContainer.getInstanceContainer(roleId),
            result = container.filter(function (item) {
                return item instanceof Cls;
            });

        if (result.length) {
            instance = result[0];
        } else {
            instance = new Cls();
            this.checkInstance(roleId, instance);
            container.push(instance);
        }

        return instance;
    }

    createComponent(keyOrConstructor, namespace) {
        return this.create(roles.component, keyOrConstructor, namespace);
    }

    createDirective(keyOrConstructor, namespace) {
        return this.create(roles.directive, keyOrConstructor, namespace);
    }

    createFilter(keyOrConstructor, namespace) {
        return this.createSingleton(roles.filter, keyOrConstructor, namespace);
    }

    createService(keyOrConstructor, namespace) {
        var Service = this.resolveConstructor(roles.service, keyOrConstructor, namespace);

        if (Service.prototype.$$metadata.nonShared) {
            return this.create(roles.service);
        }

        return this.createSingleton(roles.service, Service);
    }

    extractNsAndKey(name) {
        var segments = name.split('.');

        return {
            key: segments.pop(),
            ns: segments.length > 0 ? segments.join('.') : '',
            cls: null
        };
    }

    parseFullName(name, using) {
        var self = this, result = this.extractNsAndKey(name);

        if (using) {
            if (result.ns) {
                if (using.hasOwnProperty(result.ns)) {
                    // replace alias with real namespace
                    result.ns = using[result.ns];
                }
            } else {
                if (using.hasOwnProperty(name)) {
                    var value = using[name];

                    if (utils.isString(value)) {
                        // return real namespace and key
                        result = self.extractNsAndKey(value);
                    } else {
                        // return real class
                        result.cls = value;
                    }
                }
            }
        }

        return result;
    }

    parseConstructor(getter, name, using, defaultNs) {
        var identifier = this.parseFullName(name, using);

        if (identifier.cls) {
            return identifier.cls;
        }

        return this[getter](identifier.key, identifier.ns || defaultNs);
    }

    parseComponent(name, using, defaultNs) {
        return this.parseConstructor('getComponent', name, using, defaultNs);
    }

    parseDirective(name, using, defaultNs) {
        return this.parseConstructor('getDirective', name, using, defaultNs);
    }

    parseService(name, using, defaultNs) {
        return this.parseConstructor('getService', name, using, defaultNs);
    }

    parseFilter(name, using, defaultNs) {
        return this.parseConstructor('getFilter', name, using, defaultNs);
    }

    injectServices(instance, metadata, checkLoopDependency) {
        var self = this, serviceFullName, hasLoopDependency = false;

        if (checkLoopDependency) {
            // creating a service instance at the moment
            serviceFullName = utils.format('{0}.{1}', utils.lowercase(metadata.namespace), metadata.key);
            hasLoopDependency = this.serviceStack.indexOf(serviceFullName) !== -1;

            this.serviceStack.push(serviceFullName);

            if (hasLoopDependency) {
                // occurs loop dependency
                var error = utils.format('Loop dependency: {0}', this.serviceStack.join(' -> '));
                // clear service dependency stack
                this.serviceStack.length = 0;
                // throw error
                throw new Error(error);
            }
        }

        if (metadata && utils.isObject(metadata.inject)) {
            utils.forEach(metadata.inject, function (service, key) {
                if (utils.isString(service)) {
                    service = self.parseService(service, metadata.using, metadata.namespace);
                }
                instance[key] = self.createService(service);
            });
        }

        if (checkLoopDependency) {
            this.serviceStack.pop();
        }
    }
}

export var injector = new Injector();