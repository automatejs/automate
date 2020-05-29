import { events } from './events';
import * as utils from '../utils';

var isProxySymbol = Symbol('__isProxy'),
    targetSymbol = Symbol('__target');

var handler = {
    get: getProxy,
    set: setProxy
};

// extends object prototype, add function toProxy
Object.prototype.toProxy = function () {
    return isProxy(this) ? this : new Proxy(this, handler);
};

class Agent {
    constructor(target, handler) {
        this.target = target;
        this.handler = handler;
    }

    get(key) {
        return this.target[key];
    }

    set(key, value) {
        this.handler.set(this.target, key, value);
    }
}

class ArrayAgent extends Agent {
    get length() {
        return this.target.length;
    }

    set length(value) {
        this.handler.set(this.target, 'length', value);
    }

    constructor(target, handler) {
        super(target, handler);
    }

    concat() {
        var args = Array.prototype.slice.call(arguments, 0);
        return Array.prototype.concat.apply(this.target, args);
    }

    join() {
        var args = Array.prototype.slice.call(arguments, 0);
        return Array.prototype.join.apply(this.target, args);
    }

    pop() {
        var result, length = this.target.length;

        if (length === 0) {
            return;
        }

        length--;

        if (length >= 0) {
            result = this.target[length];
        }

        this.handler.set(this.target, 'length', length);

        return result;
    }

    push() {
        var length = this.target.length;

        if (arguments.length > 0) {
            Array.prototype.slice.call(arguments, 0).forEach((item, index) => {
                this.handler.set(this.target, length + index, item);
            });

            length += arguments.length;
            this.handler.set(this.target, 'length', length);
        }

        return length;
    }

    reverse() {
        if (this.target.length === 0) {
            return;
        }

        var copy = utils.copy(this.target);
        copy.reverse();
        copy.forEach((item, index) => {
            if (item !== this.target[index]) {
                this.handler.set(this.target, index, item);
            }
        });
    }

    shift() {
        var length = this.target.length;

        if (length > 0) {
            var result = this.target[length - 1];
            var index = 1;

            while (index < length) {
                this.handler.set(this.target, index - 1, this.target[index]);
            }

            this.handler.set(this.target, 'length', length - 1);

            return result;
        }

        return undefined;
    }

    slice() {
        var args = Array.prototype.slice.call(arguments, 0);
        return Array.prototype.slice.apply(this.target, args);
    }

    sort() {
        var args = Array.prototype.slice.call(arguments, 0);
        return Array.prototype.sort.apply(this.target, args);
    }

    splice() {
        var length = this.target.length;
        var copy = utils.copy(this.target);
        var args = Array.prototype.slice.call(arguments, 0);
        var result = Array.prototype.slice.apply(copy, args);

        copy.forEach((item, index) => {
            if (item !== this.target[index]) {
                this.handler.set(this.target, index, this.target[index]);
            }
        });

        if (copy.length !== length) {
            this.handler.set(this.target, 'length', copy.length);
        }

        return result;
    }
}

function isProxy(proxy) {
    return utils.isObject(proxy) && proxy[isProxySymbol];
}

function getTarget(proxy) {
    return isProxy(proxy) ? proxy[targetSymbol] : proxy;
}

function updateProxy(target, key) {
    var value = target[key];

    if (utils.isObject(value) && !isProxy(value)) {
        target = getTarget(target);
        target[key] = new Proxy(value, handler);
    }
}

function makeProxy(value) {
    if (utils.isObject(value) && !isProxy(value)) {
        utils.forEach(value, function (item, key) {
            value[key] = makeProxy(item);
        });
        return new Proxy(value, handler);
    }

    return value;
}

function getProxy(target, key) {
    if (key === isProxySymbol) {
        return true;
    }

    if (key === targetSymbol) {
        return target;
    }

    return target[key];
}

function setProxy(target, key, value) {
    var oldValue = getTarget(target[key]),
        newValue = getTarget(value);

    if (oldValue !== newValue) {
        var validation = {
            valid: true,
            apply: true,
            oldValue: oldValue,
            newValue: newValue
        };

        events.propChanging.fire({
            target: target,
            key: key,
            data: validation
        });

        if (validation.apply) {
            target[key] = makeProxy(value);
            events.propChanged.fire({
                target: target,
                key: key,
                data: {
                    oldValue: oldValue,
                    newValue: newValue
                }
            });
        }
    }
    else if (target[key] !== value) {
        target[key] = value;
    }

    return true;
}

export {
    isProxy,
    getTarget,
    handler
}