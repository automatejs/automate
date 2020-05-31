# template syntax

In the component template, you can bind value, bind execute handler, use component, directive and filter, the following content shows the syntax about how to use them.

# binding

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

# decorator

## nullable

> syntax ___?___

By default, the evaluation logic is the same as JavaScript engine, access property of null or undefined will throw an error, but for template, it maybe make sense to ignore this error, you can add a decorator characctor ___?___ as postfix for object member. 

```
<div>{{ obj?.content }}</div>
```

# component

> syntax ___component_name___

```
<test-cmp></test-cmp>
```

# directive

> syntax ___*___

```
<div *m-bind="content"></div>
```

# filter

> syntax ___|___

```
<div *m-bind="content | filter"></div>

<!-- pass arguments to filter -->
<div *m-bind="content | filter:arg1:arg2:..."></div>
```

# namespace

> syntax ___[package].[name]___

If two package has component with same name, you can identify them with namespace

```
<!-- add package name before key name -->
<sample.test-cmp *m-bind="content"></sample.test-cmp>
```