# Module

It is also possible to develop components in module working with tools such as webpack, to create a component, directive, service and filter, you can add ___decorator___ in a class passing metadata definition.

## [Startup Project](https://github.com/automatejs/webnote)

## [Demo](https://automatejs.github.io/webnote/)

# Decorator

## @component

```
@component({
    namespace: 'sample',
    key: 'myComponent'
})
class MyComponent extends automate.Component {
    constructor() {
        super();
    }
}
```

## @directive

```
@directive({
    namespace: 'sample',
    key: 'myDirective'
})
class MyDirective extends automate.Directive {
    constructor() {
        super();
    }
}
```

## @service

```
@service({
    namespace: 'sample',
    key: 'myService'
})
class MyService extends automate.Service {
    constructor() {
        super();
    }
}
```

## @filter

```
@filter({
    namespace: 'sample',
    key: 'myFilter'
})
class MyFilter extends automate.Filter {
    constructor() {
        super();
    }
}
```