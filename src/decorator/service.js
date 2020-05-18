import { injector } from '../view';

export function service(metadata) {
    return function (target) {
        var key = metadata.key || target.name;
        injector.registerService(key, target, metadata);
    };
}