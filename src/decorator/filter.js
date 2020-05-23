import { injector } from '../view';

export function filter(metadata) {
    return function (target) {
        var key = metadata.key || target.name;
        target.prototype.$$metadata = metadata;
        injector.registerFilter(key, target);
    };
}