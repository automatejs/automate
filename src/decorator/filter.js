import { injector } from '../view';

export function filter(metadata) {
    return function (target) {
        var key = metadata.key || target.name;
        injector.registerFilter(key, target, metadata);
    };
}