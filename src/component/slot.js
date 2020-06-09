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
            this.$$mainView = new Renderer(this.$$parent).render(template, this.$container);
        }
    }

    onDestroy() {
        if(this.$$mainView) {
            this.$$mainView.destroy();
        }
    }
}