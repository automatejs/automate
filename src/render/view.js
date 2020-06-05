import * as utils from '../utils';

export class View {
    get content() {
        var content = document.createDocumentFragment();
        this.nodes.forEach(node => content.appendChild(node));
        return content;
    }

    constructor() {
        this.nodes = [];
        this.vnodes = [];
        this.bindings = [];
        this.directives = [];
        this.components = [];
    }

    mount(selectorOrElement) {
        var element;

        if (utils.isString(selectorOrElement)) {
            element = document.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }

        element.appendChild(this.content);
    }

    // bindTranslateChanged() {
    //     var bindings = this.entity.bindings;
    //
    //     if(!bindings.length) {
    //         return;
    //     }
    //
    //     // update text while translate changed
    //     this.unbindTranslateChanged = events.translateChanged.on(() => {
    //         bindings.forEach(binding => {
    //             binding.detect();
    //             binding.patch();
    //         });
    //     });
    // }

    destroy() {
        this.components.forEach(item => item.$destroy());
        this.directives.forEach(item => item.$destroy());
        this.bindings.forEach(item => item.destroy());
        this.vnodes.forEach(item => item.destroy());

        this.components.length = 0;
        this.directives.length = 0;
        this.bindings.length = 0;
        this.vnodes.length = 0;
        this.nodes.length = 0;
    }
}