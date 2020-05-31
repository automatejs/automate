# Component

while you would like to encapsulate a ui control to resue in the application, please use component interface provided in the automate.

component is a JavaScript class, it refers to __web component__ standard, but what's more, it is reactive. while it is rendered, component instance is also as view model, the template can access all properties and methods with expression binding. but keep in mind, only the properties defined in the ___state___ and ___props___ is reactive. ___state___ is privated, ___props___ is published

while definding a component, you can define published properties and events to comminucate with other components.

# Define component

```
<!-- define a web component with name "test-cmp" -->
automate.namespace('sample').component('test-cmp', {
    construct: function () {
       // component contructor
       // define propertys here
    },
    // define methods here
}, {
    // component configuration
    template: '<template id="test-cmp"><div>it is a web component</div></template>'
});
```

# Use template id

```
<!-- the template -->
<template id="test-cmp">
    <div>it is a web component</div>
</template>

<!-- define a web component with name "test-cmp" -->
automate.namespace('sample').component('test-cmp', {
    construct: function () {
       
    }
}, {
    templateId: 'test-cmp'
});
```

# Use component

```
<!--use it with custom element tag -->
<test-cmp></test-cmp>
```

# Define property

```
<!-- update template -->
<template id="test-cmp">
    <div>it is a web component</div>
    <div>name: {{ props.name }}</div>
</template>

<!-- publish property -->
automate.namespace('sample').component('test-cmp', {
    construct: function () {
        this.props.name = '';
    }
}, {
    templateId: 'test-cmp'
});

<!-- transfer value to property -->
<test-cmp :name="state.name"></test-cmp>
```

# Define event

> you can access the event data via property ___data___ in the event, access the event and target element via internal variable ___$event___, ___$element___

```
<!-- index.html -->

<!-- update template -->
<template id="test-cmp">
    <div>it is a web component</div>
    <div>name: {{ props.name }}</div>
    <button @click="rename()">rename</button>
</template>

<!-- publish event -->
automate.namespace('sample').component('test-cmp', {
    construct: function () {
        this.props.name = '';
        this.events.renamed = new automate.Message();
    },
    rename: function () {
        this.props.name = 'new test component';
        this.events.renamed.fire({
            newName: this.props.name
        });
    }
}, {
    templateId: 'test-cmp'
});

<!-- subscribe event -->
<test-cmp :name="state.name" @renamed="onNameChange($event)"></test-cmp>
```

# Define slot

```
<!-- slot placeholder in the temlate -->
 <template id="test-cmp">
    <div>it is a web component</div>
    <div>name: {{ props.name }}</div>
    <slot name="part1"></slot>
    <slot name="part2"></slot>
    <button @click="rename()">rename</button>
</template>
```

# Use slot

```
<!-- define slot content under the web component element -->
<test-cmp :name="state.name" @renamed="onNameChange($event)">
    <div slot="part1">
        this is part 1
    </div>

    <div slot="part2">
        this is part 2
    </div>
</test-cmp>
```

# Sample

```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>create a component</title>
</head>

<body>
    <template id="test-cmp">
        <div>it is a web component</div>
        <div>name: {{ props.name }}</div>
        <slot name="part1"></slot>
        <slot name="part2"></slot>
        <button @click="rename()">rename</button>
    </template>

    <div id="app">
        <test-cmp :name="state.name" @renamed="onNameChange($event)">
            <div slot="part1">
                this is part 1
            </div>
     
            <div slot="part2">
                this is part 2
            </div>
        </test-cmp>
    </div>

    <script src="../dist/automate.js"></script>

    <script>
        automate.namespace('sample').component('test-cmp', {
            construct: function () {
                this.props.name = '';
                this.events.renamed = new automate.Message();
            },
            rename: function () {
                this.props.name = 'new test component';
                this.events.renamed.fire({
                    newName: this.props.name
                });
            }
        }, {
            templateId: 'test-cmp'
        });

        automate.render('#app', {
            construct: function () {
                this.state.name = 'test component';
            },
            onNameChange: function (e) {
                alert('new name: ' + e.data.newName);
            }
        });
    </script>
</body>

</html>
```

# Configuration

## template

component template string

## templateId

html template element id value

## alias

alias object define short name for package name

## inject

inject object, inject service to the component instance

# Life cycle hoops

## onDestroy

    it will be called while component is being destroyed.



