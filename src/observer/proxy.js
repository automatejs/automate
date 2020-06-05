import { events } from '../core';
import * as utils from '../utils';

var isProxySymbol = Symbol('__isProxy'),
    targetSymbol = Symbol('__target');

var handler = {
    get: getProxy,
    set: setProxy
};

// extends object prototype, add function toProxy
// Object.prototype.toProxy = function () {
//     return isProxy(this) ? this : new Proxy(this, handler);
// };

function isProxy(proxy) {
    return utils.isObject(proxy) && proxy[isProxySymbol];
}

function getTarget(proxy) {
    return isProxy(proxy) ? proxy[targetSymbol] : proxy;
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
        target[key] = makeProxy(value);
        events.propertyChanged.fire({
            target: target,
            key: key,
            data: {
                oldValue: oldValue,
                newValue: newValue
            }
        });
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