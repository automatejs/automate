import { Component } from '../view';
import { component } from '../decorator';

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

        if(template) {
            this.$$view = this.$$parent.$$renderer.render(template);
        }

        return this.$$view;
    }
}