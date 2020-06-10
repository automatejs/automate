# Template syntax

In the component template, you can bind value, bind execute handler, use component, directive and filter, the following content shows the syntax about how to use them.

# Binding

in the template you can bind an JavaScript expression to specified text node, attribute vale and event handler.

## text

> syntax ___{{ }}___

```
<div>{{ state.content }}</div>

<!-- conditional expression -->
<div>{{ state.yes?'yes':'no' }}</div>
```

## attribute

> syntax ___:___

```
<input :value="state.value" />
```

## event 

> syntax ___@___

```
<button @click="doSomething()"></button>

<!-- inject event object -->
<button @click="doSomething($event)"></button>

<!-- inject element object -->
<button @click="doSomething($element)"></button>
```

# Decorator

## nullable

> syntax ___?___

By default, the evaluation logic is the same as JavaScript engine, access property of null or undefined will throw an error, but for template, it maybe make sense to ignore this error, you can add a decorator characctor ___?___ as postfix for object member. 

```
<div>{{ obj?.content }}</div>
```

# Component

> syntax ___component_name___

```
<test-cmp></test-cmp>
```

# Directive

> syntax ___*___

```
<div *m-bind="content"></div>
```

# Filter

> syntax ___|___

```
<div *m-bind="content | filter"></div>

<!-- pass arguments to filter -->
<div *m-bind="content | filter:arg1:arg2:..."></div>
```

# Namespace

> syntax ___[namespace].[key]___

If two namespace has component with same name, you can identify them with namespace

```
<!-- add namespace before key name -->
<sample.test-cmp *m-bind="content"></sample.test-cmp>
```