import { injector } from '../view';

export function directive(metadata) {
    return function (target) {
        var key = metadata.key || target.name;
        injector.registerDirective(key, target, metadata);
    };
}