# Namespace

automate.js organize component, directive, filter and service with namespace strategy, namespace must be specified while bootstrap the automate application, only components defined in the current namespace and built-in components can be recognized by default, if you like to use components from other namespace, it is required to specify namespace in the template or injection.

assuming to use a component "test-cmp" from namespace 'external'

```
<external.test-cmp></external.test-cmp>
```

specify alias for it with using option

```
automate.namespace('internal').component('app', {

}, {
    using: {
        testCmp: 'external.test-cmp'
    }
})
```

use the alias instead in the template

```
<test-cmp></test-cmp>
```

# Key

The key name is the identifier of itself, automate finds respective object by it.

> for key name with more than 2 words, you must separate name with separator "-" in the template

## define a ccomponent "longName"

```
automate.namesace('sample').component('longName' ,{
    // definition
});
```

## use the component

```
<long-name><long-name>
```