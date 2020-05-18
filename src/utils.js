var debugMode = true,
    toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf;

function forEach(obj, action, ignoreOwn) {
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (action(obj[index], index)) {
                return;
            }
        }
    }
    else if (isObject(obj)) {
        for (var p in obj) {
            if (ignoreOwn || obj.hasOwnProperty(p)) {
                if (action(obj[p], p)) {
                    return;
                }
            }
        }
    }
    else {
        action(obj, obj);
    }
}

function some(obj, action) {
    if (isArray(obj)) {
        for (var index = 0; index < obj.length; index++) {
            if (action(index, obj[index])) {
                return true;
            }
        }
    }
    else if (isObject(obj)) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                if (action(p, obj[p])) {
                    return true;
                }
            }
        }
    }
    else {
        return action(obj, obj);
    }
}

function copy() {
    var deep = false, objIndex = 0, obj = arguments[objIndex], filter;

    if (isBoolean(obj)) {
        deep = obj;
        objIndex++;
        obj = arguments[objIndex];
    }

    if (arguments.length > objIndex + 1) {
        filter = arguments[objIndex + 1];
    }

    if (isArray(obj)) {
        var newArr = [];
        obj.forEach(function (item, index) {
            if (filter == null || filter(obj, index, item)) {
                newArr.push(deep ? copy(item) : item);
            }
        });
        return newArr;
    }

    if (isObject(obj)) {
        var newObj = object(obj);
        forEach(obj, function (value, key) {
            if (filter == null || filter(obj, key, value)) {
                newObj[key] = deep ? copy(value) : value;
            }
        });
        return newObj;
    }

    return obj;
}

function extend() {
    var deep = false, index = 0, target = arguments[index];

    if (isBoolean(target)) {
        deep = target;
        target = arguments[++index];
    }

    if (deep) {
        Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
            deepMerge(target, item);
        });
    }
    else {
        Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
            plainMerge(target, item);
        });
    }
}

function merge() {
    var deep = false, index = 0, target = {};

    if (isBoolean(arguments[index])) {
        deep = arguments[index];
        index++;
    }

    if (deep) {
        Array.prototype.slice.call(arguments, index).forEach(function (item) {
            deepMerge(target, item);
        });
    }
    else {
        Array.prototype.slice.call(arguments, index).forEach(function (item) {
            plainMerge(target, item);
        });
    }

    return target;
}

function plainMerge(target, source) {
    forEach(source, function (value, key) {
        target[key] = value;
    });
}

function deepMerge(target, source) {
    forEach(source, function (value, key) {
        if (target[key] == null) {
            target[key] = value;
        }
        else {
            if (isObject(target[key]) && isObject(value)) {
                deepMerge(target[key], value);
            }
            else {
                target[key] = value;
            }
        }
    });
}

function object(o) {
    function F() {
    }

    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function inherit(subType, superType) {
    inheritPrototype(subType, superType);
    subType.super = function () {
        superType.apply(this, arguments);
    };
}

function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
}

function uppercase(string) {
    return isString(string) ? string.toUpperCase() : string;
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

function isDefined(value) {
    return typeof value !== 'undefined';
}

function isArray(obj) {
    return obj instanceof Array;
}

function isMap(obj) {
    return obj instanceof Map;
}

function isObject(value) {
    return value !== null && typeof value === 'object';
}

function isBlankObject(value) {
    return value !== null && typeof value === 'object' && !getPrototypeOf(value);
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isDate(value) {
    return toString.call(value) === '[object Date]';
}

function isFunction(value) {
    return typeof value === 'function';
}

function isRegExp(value) {
    return toString.call(value) === '[object RegExp]';
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isFormData(value) {
    return (typeof FormData !== 'undefined') && (value instanceof FormData);
}

function isSame(obj1, obj2) {
    var same = (obj1 === obj2);

    if (!same) {
        if (isArray(obj1) && isArray(obj2)) {
            if (obj1.length === obj2.length) {
                same = !some(obj1, function (index, value) {
                    return !isSame(value, obj2[index]);
                });
            }
        }
        else if (isObject(obj1) && isObject(obj2) && getPrototypeOf(obj1) === getPrototypeOf(obj2)) {
            same = !some(obj1, function (key, value) {
                return !isSame(value, obj2[key]);
            });
        }
    }

    return same;
}

function debug(log) {
    if (debugMode) {
        console.log(log);
    }
}

function contains(arr, obj) {
    return arr.some(function (item) {
        return item === obj;
    });
}

function containsStr(arr, str, ignoreCase) {
    return arr.some(function (item) {
        return item === str || (ignoreCase && lowercase(item) === lowercase(str));
    });
}

function hasProperty(obj, key, ignoreCase) {
    if (!obj) {
        return false;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        hasProp = false;
        forEach(target, function (value3, key3) {
            hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
            if (hasProp) {
                target = value3;
            }
            return hasProp;
        }, true);
    }

    return hasProp;
}

function getProperty(obj, key, ignoreCase) {
    if (!obj) {
        return null;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        hasProp = false;
        forEach(target, function (value3, key3) {
            hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
            if (hasProp) {
                target = value3;
            }
            return hasProp;
        }, true);
    }

    return hasProp ? target : null;
}

function setProperty(obj, key, value, ignoreCase) {
    if (!obj) {
        return;
    }

    var key2, hasProp = true, keys = key.split('.'), target = obj;

    while (hasProp && keys.length > 0) {
        key2 = keys.shift();
        if (keys.length === 0) {
            target[key2] = value;
        }
        else {
            hasProp = false;
            forEach(target, function (value3, key3) {
                hasProp = (key3 === key2 || (ignoreCase && lowercase(key3) === lowercase(key2)));
                if (hasProp) {
                    target = value3;
                }
                return hasProp;
            }, true);
        }
    }

    if (!hasProp) {
        throw new Error(key + ': Can not set property of undefined');
    }
}

function concat() {
    return Array.prototype.concat.apply([], arguments);
}

function orderBy(arr, getter) {
    var getValue = function (item) {
        if (getter == null) {
            return item;
        }

        return getter(item);
    };

    return arr.sort(function (a, b) {
        if (getValue(a) < getValue(b)) {
            return -1;
        }
        if (getValue(a) > getValue(b)) {
            return 1;
        }
        return 0;
    });
}

function orderByDescending(arr, getter) {
    var getValue = function (item) {
        if (getter == null) {
            return item;
        }

        return getter(item);
    };

    return arr.sort(function (a, b) {
        if (getValue(a) < getValue(b)) {
            return 1;
        }
        if (getValue(a) > getValue(b)) {
            return -1;
        }
        return 0;
    });
}

function toNumber(value) {
    var n = parseFloat(value);
    return isNaN(n) ? value : n;
}

function remove(arr, item) {
    if (arr.length) {
        var index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}

function format() {
    if (arguments.length === 0) {
        return;
    }

    var match, matchText, index, result = '', text = arguments[0],
        pattern = /\{(\d+)\}/g, lastIndex = pattern.lastIndex;

    while (match = pattern.exec(text)) {
        matchText = match[0];
        index = Number.parseInt(match[1]) + 1;

        if (arguments.length <= index) {
            throw new Error('format item ' + index + 'is not defined');
        }

        result += text.substring(lastIndex, match.index) + arguments[index];
        lastIndex = pattern.lastIndex;
    }

    result += text.substring(lastIndex);

    return result;
}

function escapeHtml(html) {
    return html.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&').replace(/&quote;/g, '');
}

function join(separator, arr) {
    var result = '', length = arr.length;

    arr.forEach(function (item, index) {
        result += item;

        if (index + 1 < length) {
            result += separator;
        }
    });

    return result;
}

export {
    forEach,
    some,
    copy,
    extend,
    merge,
    object,
    inherit,
    lowercase,
    uppercase,
    isUndefined,
    isDefined,
    isObject,
    isBlankObject,
    isNumber,
    isDate,
    isFunction,
    isRegExp,
    isBoolean,
    isArray,
    isString,
    isSame,
    isFormData,
    debug,
    contains,
    containsStr,
    hasProperty,
    getProperty,
    setProperty,
    concat,
    orderBy,
    orderByDescending,
    toNumber,
    remove,
    format,
    escapeHtml,
    join
}