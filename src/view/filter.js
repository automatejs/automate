
export function filterConstructor(metadata) {

}

export class Filter {
    constructor(metadata) {
        filterConstructor.call(this, metadata);
    }
}