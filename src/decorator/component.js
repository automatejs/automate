import { injector } from '../view';

export function component(metadata) {
    return function (target) {
        var key = metadata.key || target.name;
        injector.registerComponent(key, target, metadata);
    };
}