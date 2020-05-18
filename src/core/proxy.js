import { events } from './events';
import * as utils from '../utils';

class ProxyHandler {
    constructor() {
    }

    set(target, key, value) {
        var oldValue = target[key];

        if (oldValue !== value || (utils.isArray(target) && key === 'length')) {
            var validation = {
                valid: true,
                apply: true,
                oldValue: oldValue,
                newValue: value
            };

            events.propChanging.fire({
                target: target,
                key: key,
                data: validation
            });

            if (validation.apply) {
                target[key] = value;
                events.propChanged.fire({
                    target: target,
                    key: key,
                    data: {
                        oldValue: oldValue,
                        newValue: value
                    }
                });
            }
        }

        return true;
    }
}

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

        if(length === 0){
            return;
        }

        length--;

        if(length >= 0 ){
            result = this.target[length];
        }

        this.handler.set(this.target, 'length', length);

        return result;
    }

    push() {
        var length = this.target.length;

        if(arguments.length > 0){
            Array.prototype.slice.call(arguments, 0).forEach((item, index) => {
                this.handler.set(this.target, length + index, item);
            });

            length += arguments.length;
            this.handler.set(this.target, 'length', length);
        }

        return length;
    }

    reverse() {
        if(this.target.length === 0){
            return;
        }

        var copy = utils.copy(this.target);
        copy.reverse();
        copy.forEach((item, index) => {
           if(item !== this.target[index]) {
            this.handler.set(this.target, index, item);
            }
        });
    }

    shift() {
        var length = this.target.length;

        if(length > 0){
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
           if(item !== this.target[index]) {
            this.handler.set(this.target, index, this.target[index]);
            }
        });

        if(copy.length !== length) {
            this.handler.set(this.target, 'length', copy.length);
        }

        return result;
    }
}

var proxyHandler = new ProxyHandler();

Object.prototype.delegate = function(handler) {
    var proxy;

    if(utils.isDefined(Proxy)) {
        proxy = new Proxy(this, proxyHandler);
    }
    else {
        if(utils.isArray(this)) {
            proxy = new ArrayAgent(this);
        }
        else if(utils.isObject(this)) {
            proxy = new Agent(this);
        }
        else {
            proxy = this;
        }
    }

    if(handler) {
        handler.call(this, proxy);
    }

    return proxy;
};