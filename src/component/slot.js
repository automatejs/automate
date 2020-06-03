import { Component } from '../view';
import { component } from '../decorator';
import { Renderer } from '../render';

@component({
    namespace: 'automate',
    key: 'slot'
})
class SlotComponent extends Component {
    constructor() {
        super();
        this.props.name = '';
    }

    $render() {
        var slots = this.$$parent.slots;
        var template = slots[this.props.name];

        if (template) {
            this.$$renderer = new Renderer(this.$$parent, template);
            this.$$renderer.render();
            return this.$$renderer;
        }
    }
}