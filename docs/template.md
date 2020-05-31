# template syntax

Ths article shows the syntax supported in the template

# binding

in the template you can bind an JavaScript expression to specified text node, attribute vale and event handler.

## bind value with ___{{ }}___ or ___:___

```
<div>{{ state.content }}</div>

<div :></div>
```

## bind event with ___@___

```
<button @click="doSomething()"></button>

<!-- inject event object -->
<button @click="doSomething($event)"></button>

<!-- inject element object -->
<button @click="doSomething($element)"></button>
```

# decorator

## nullable object

By default, the evaluation logic is the same as JavaScript engine, access property of null or undefined will throw an error, but for template, it maybe make sense to ignore this error, you can add a decorator characctor ___?___ as postfix for object member. 

```
<div>{{ obj?.content }}</div>
```

# component

```
<test-cmp></test-cmp>
```

# directive

```
<div *m-bind="content"></div>
```

# filter

```
<div *m-bind="content | filter"></div>

<!-- pass arguments to filter -->
<div *m-bind="content | filter:arg1:arg2:..."></div>
```

# namespace

If two package has component with same name, you can identify them with namespace

```
<!-- add package name before key name -->
<sample.test-cmp *m-bind="content"></sample.test-cmp>
```