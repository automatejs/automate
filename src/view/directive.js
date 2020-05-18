
export function directiveConstructor() {
    this.$$scope = null;
    this.$$vattr = null;
    // identify this directive would assign value to binding expression
    this.$assigned = false;
    this.$priority = 9;
}

export class Directive {
    get $scope() {
        return this.$$scope;
    }

    get $elm() {
        return this.$$vattr.velm.elm;
    }

    get $binding() {
        return this.$$vattr.data.binding;
    }

    constructor(meatadata) {
        directiveConstructor.call(this, meatadata);
    }

    // while compiling
    $compile() {
        return this.onCompile && this.onCompile(this.$$vattr.velm, this.$$vattr);
    }

    // the input value is changed
    $change(value) {
        this.onChange && this.onChange(value);
    }

    $link() {
        return this.onLink && this.onLink(this.$scope);
    }

    // before linking
    // $prelink() {
    //     this.beforeLink && this.beforeLink();
    // }

    // after linking
    $postlink() {
        this.afterLink && this.afterLink();
    }

    $destroy() {
        this.onDestroy && this.onDestroy();
    }
}