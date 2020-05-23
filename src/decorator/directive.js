import { injector } from '../view';

export function directive(metadata) {
    return function (target) {
        var key = metadata.key || target.name;
        target.prototype.$$metadata = metadata;
        injector.registerDirective(key, target);
    };
}