# what is it

automate is a JavaScript library for building web user interface, it lets you encapsulate user interface code as "Component", then compose them to make complex UIs. It is also a implementation of JavaScript MVVM pattern, it will update ui while data change in view model.

automate provides progressive development style, developer can build component in script directily or do it with JavaScript module tools, such as webpack.

# compatibility

automate is designed for modern browser, it use ES6 proxy object to detect data change.

# document

[automate.js](https://github.com/automatejs/automate)

# get start

1. reference automate js

```
<script src="lib/automate.js"></script>
```

2. create html template

```
<div id="app">
    <div>{{ state.value }}</div>
</div>
```

3. render the template 

```
automate.render('#app', {
    construct: function () {
        this.state.value = 'quick start';
    }
});
```
