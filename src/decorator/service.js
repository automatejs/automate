import { injector } from '../view';

export function service(metadata) {
    return function (target) {
        var key = metadata.key || target.name;
        target.prototype.$$metadata = metadata;
        injector.registerService(key, target);
    };
}