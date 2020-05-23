import { injector } from '../view';

export function component(metadata) {
    return function (target) {
        var key = metadata.key || target.name;
        target.prototype.$$metadata = metadata;
        injector.registerComponent(key, target);
    };
}