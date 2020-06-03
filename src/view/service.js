import * as utils from '../utils';
import { injector } from './injector';

export function serviceConstructor(data) {
    this.$data = utils.merge(this.$$metadata, data);
    injector.injectServices(this, this.$data, true);
}

export class Service {
    constructor(data) {
        serviceConstructor.call(this, data);
    }
}