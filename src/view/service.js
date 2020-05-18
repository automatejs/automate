export function serviceConstructor(metadata) {

}

export class Service {
    constructor(metadata) {
        serviceConstructor.call(this, metadata);
    }
}