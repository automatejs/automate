import * as utils from '../utils';
import { injector } from './injector';

export function filterConstructor(data) {
    this.$data = utils.merge(this.$$metadata, data);
    injector.injectServices(this, this.$data);
}

export class Filter {
    constructor(data) {
        filterConstructor.call(this, data);
    }
}