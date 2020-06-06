var toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf;

// is
function isUndefined(value) {
    return typeof value === 'undefined';
}

function isDefined(value) {
    return typeof value !== 'undefined';
}

function isArray(value) {
    return value instanceof Array;
}

function isMap(value) {
    return value instanceof Map;
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
// end of is

// value
function toNumber(value) {
    var n = parseFloat(value);
    return isNaN(n) ? value : n;
}

function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
}

function uppercase(string) {
    return isString(string) ? string.toUpperCase() : string;
}

function convertToHumpName(name, separator, uppercaseFirstLetter) {
    return name.split(separator).map(function (value, index) {
        if (index === 0 && !uppercaseFirstLetter) {
            return value;
        }

        if (value.length === 1) {
            return value.toUpperCase();
        }

        return value.charAt(0).toUpperCase() + value.substring(1);
    }).join('');
}

function convertFromHumpName(name, separator, uppercaseFirstLetter) {
    var i = 0, newName = '', char;

    while (i < name.length) {
        char = name[i];

        if ((i !== 0 || uppercaseFirstLetter) && /[A-Z]/.test(char)) {
            newName += separator;
            newName += char.toLowerCase();
        } else {
            newName += char;
        }
    }

    return newName;
}
// end if value

// object
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
                newArr.push(deep ? copy(deep, item) : item);
            }
        });
        return newArr;
    }

    if (isObject(obj)) {
        var newObj = object(obj);
        forEach(obj, function (value, key) {
            if (filter == null || filter(obj, key, value)) {
                newObj[key] = deep ? copy(deep, value) : value;
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
// end of object

// iterator
function forEach(target, action) {
    if (isArray(target)) {
        target.forEach(action);
    } else if (isObject(target)) {
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                action(target[key], key);
            }
        }
    }
}

function some(target, func) {
    if (isArray(target)) {
        return target.some(func);
    }

    if (isObject(target)) {
        for (var key in target) {
            if (target.hasOwnProperty(key)) {
                if (func(target[key], key)) {
                    return true;
                }
            }
        }
    }
}
// end of iterator

// array
function orderBy(list, getter) {
    var getValue = function (item) {
        if (getter == null) {
            return item;
        }

        return getter(item);
    };

    return list.sort(function (a, b) {
        if (getValue(a) < getValue(b)) {
            return -1;
        }
        if (getValue(a) > getValue(b)) {
            return 1;
        }
        return 0;
    });
}

function orderByDescending(list, getter) {
    var getValue = function (item) {
        if (getter == null) {
            return item;
        }

        return getter(item);
    };

    return list.sort(function (a, b) {
        if (getValue(a) < getValue(b)) {
            return 1;
        }
        if (getValue(a) > getValue(b)) {
            return -1;
        }
        return 0;
    });
}

function concat() {
    return Array.prototype.concat.apply([], arguments);
}

function remove(list, value) {
    var index = list.indexOf(value);
    if (index !== -1) {
        return list.splice(index, 1);
    }
}
// end of array

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

function hasProperty(target, property) {
    var key, keys = property.split('.');

    while (keys.length > 1) {
        if (!isObject(target)) {
            return false;
        }

        key = keys.shift();
        target = target[key];
    }

    return isObject(target) && target.hasOwnProperty(keys.shift());
}

function getProperty(target, property) {
    var key, keys = property.split('.');

    while (keys.length > 0) {
        if(!isObject(target)) {
            return;
        }

        key = keys.shift();
        target = target[key];
    }

    return target;
}

function setProperty(target, property, value) {
    var key, keys = property.split('.');

    while (keys.length > 1) {
        if (!isObject(target)) {
            return;
        }

        key = keys.shift();
        target = target[key];
    }

    if (isObject(target)) {
        key = keys.shift();
        target[key] = value;
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

export {
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
    isFormData,
    toNumber,
    lowercase,
    uppercase,
    convertToHumpName,
    convertFromHumpName,
    copy,
    extend,
    merge,
    forEach,
    some,
    remove,
    concat,
    orderBy,
    orderByDescending,
    object,
    inherit,
    hasProperty,
    getProperty,
    setProperty,
    format,
    escapeHtml
}