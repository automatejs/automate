import { Directive } from '../view';
import { directive } from '../decorator';

@directive({
    namespace: 'automate',
    key: 'model'
})
class ModelDirective extends Directive {
    constructor() {
        super();
        this.viewValue = null;
        this.modelValue = null;
        this.parsers = [];
        this.formatters = [];
        this.viewChangeListeners = [];
        this.validators = [];
        this.status = {
            feedback: '',
            pristine: true,
            dirty: false,
            valid: true,
            invalid: false
        };
        this.options = {
            css: {
                pristine: 'n-pristine',
                dirty: 'n-dirty',
                valid: 'n-valid',
                invalid: 'n-invalid'
            }
        };
    }

    onChange(value) {
        this.commitModelValue(value);
    }

    afterLink() {
        var name = this.$element.name;

        if (name) {
            this.$scope.state[name] = this.status;
        }

        if (this.$component != null) {
            this.$component.$bind('change', e => this.commitViewValue(e.data.newvalue));
        }
        else {
            this.$element.addEventListener('input', e => this.commitViewValue(e.target.value));
        }
    }

    onDestroy() {

    }

    commitModelValue(newValue) {
        if (this.modelValue === newValue) {
            return;
        }

        var self = this;

        this.validators.forEach(function (validator) {
            validator.call(self, newValue, this.modelValue);
        });

        this.modelValue = newValue;

        this.formatters.forEach(function (formatter) {
            newValue = formatter.call(self, newValue);
        });

        if (this.viewValue === newValue) {
            return;
        }

        this.viewValue = newValue;

        if (this.$component != null) {
            this.$component.$setProperty('value', newValue);
        } else {
            this.$element.value = newValue;
        }

        this.updateElmCssClass();
    }

    commitViewValue(newValue) {
        if (this.viewValue === newValue) {
            return;
        }

        var self = this;

        this.markDirtyStatus(true);

        this.viewChangeListeners.forEach(function (listener) {
            listener.call(self, newValue, self.viewValue);
        });

        this.viewValue = newValue;

        this.parsers.forEach(function (parser) {
            newValue = parser.call(self, newValue);
        });

        if(this.modelValue === newValue) {
            return;
        }

        this.validators.forEach(function (validator) {
            validator.call(self, newValue, self.modelValue);
        });

        this.modelValue = newValue;

        this.$binding.assign(newValue);
    }

    updateElmCssClass() {
        var ele = this.$element,
            css = this.options.css;

        if (this.status.dirty) {
            ele.classList.add(css.dirty);
            ele.classList.remove(css.pristine);
        } else {
            ele.classList.add(css.pristine);
            ele.classList.remove(css.dirty);
        }

        if (this.status.valid) {
            ele.classList.add(css.valid);
            ele.classList.remove(css.invalid);
        } else {
            ele.classList.add(css.invalid);
            ele.classList.remove(css.valid);
        }
    }

    markDirtyStatus(dirty) {
        this.status.dirty = dirty;
        this.status.pristine = !dirty;
        this.updateElmCssClass();
    }

    markValidStatus(valid, feedback) {
        this.status.valid = valid;
        this.status.invalid = !valid;
        this.status.feedback = feedback;
        this.updateElmCssClass();
    }
}