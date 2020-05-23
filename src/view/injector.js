import * as utils from '../utils';
import { roles } from './roles';

// metadata example
// { key: '', namespace: '', extends: null, construct: fn, methods: {} }
export class Injector {
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

    has(roleId, key, ignoreCase, alias) {
        var constructors, container = this.getClassContainer(roleId);
        var segments = this.convertAlias(key, alias).split('.');
        var namespace = '';

        if (segments.length > 1) {
            key = segments.pop();
            namespace = segments.join('.');
        }

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

    hasComponent(key, alias) {
        return this.has(roles.component, key, true, alias);
    }

    hasDirective(key, alias) {
        return this.has(roles.directive, key, true, alias);
    }

    hasFilter(key, alias) {
        return this.has(roles.filter, key, true, alias);
    }

    hasService(key, alias) {
        return this.has(roles.service, key, true, alias);
    }

    get(roleId, key, ignoreCase, alias) {
        var constructors, container = this.getClassContainer(roleId);
        var segments = this.convertAlias(key, alias).split('.');
        var namespace = '';

        if (segments.length > 1) {
            key = segments.pop();
            namespace = segments.join('.');
        }

        if (ignoreCase) {
            constructors = utils.getProperty(container, key, true);
        }
        else {
            constructors = container[key];
        }

        if (constructors == null) {
            throw new Error(roleId + ' ' + key + ' is not defined');
        }

        if (namespace && constructors.length > 0) {
            constructors = constructors.filter(function (item) {
                var meta = item.prototype.$$metadata;
                return meta.namespace && utils.lowercase(meta.namespace) === utils.lowercase(namespace);
            });

            if (constructors.length === 0) {
                throw new Error(key + ' is not exist under namespace ' + namespace);
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

    getComponent(key, alias) {
        return this.get(roles.component, key, alias);
    }

    getDirective(key, alias) {
        return this.get(roles.directive, key, alias);
    }

    getFilter(key, alias) {
        return this.get(roles.filter, key, alias);
    }

    getService(key, alias) {
        return this.get(roles.service, key, alias);
    }

    create(roleId, keyOrConstructor, alias) {
        var constructor;

        if (utils.isString(keyOrConstructor)) {
            constructor = this.get(roleId, keyOrConstructor, alias);

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

    createComponent(keyOrConstructor, alias) {
       return this.create(roles.component, keyOrConstructor, alias);
    }

    createDirective(keyOrConstructor, alias) {
        return this.create(roles.directive, keyOrConstructor, alias);
    }

    createFilter(keyOrConstructor, alias) {
        var instance, container = this.getInstanceContainer(roles.filter);

        if (utils.isString(keyOrConstructor)) {
            keyOrConstructor = this.getFilter(keyOrConstructor, alias);
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

    createService(keyOrConstructor, alias) {
        var instance, container = this.getInstanceContainer(roles.service);

        if (utils.isString(keyOrConstructor)) {
            keyOrConstructor = this.getService(keyOrConstructor, alias);
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

    convertAlias(key, alias) {
        if (!utils.isObject(alias)) {
            return key;
        }

        var segments = key.split('.');

        if (segments.length === 1) {
            return key;
        }

        var className = segments.pop(),
            spaceName = segments.join('.');

        utils.some(alias, function (shortName, fullName) {
            if (shortName === spaceName) {
                key = fullName + '.' + className;
                return true;
            }
        });

        return key;
    }

    injectServices(instance, metadata) {
        var self = this;

        if (metadata && utils.isObject(metadata.inject)) {
            utils.forEach(metadata.inject, function (value, key) {
                Object.defineProperty(instance, key, {
                    enumerable: false,
                    configurable: false,
                    get: function () {
                        var privateKey = '$$' + key;

                        if (instance[privateKey] == null) {
                            instance[privateKey] = self.createService(value, metadata.alias);
                        }

                        return instance[privateKey];
                    }
                });
            });
        }
    }
}

export var injector = new Injector();