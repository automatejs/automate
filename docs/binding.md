# Create a binding

automate implements MVVM pattern and reactive view, you can bind value from component to view, the view will be updated while data change, however only the viriable in the component ___state___ or ___props___ have the reactive feature. it is not recommended to set value to ___state___ or ___props___ directive, please call method ___setState___ or ___setProps___ instead.

> don't do as below

```
this.state = {
    // state object
};

or

this.props = {
    // props object
};

```

> do as below

```
this.setState({
    // state object
})

or

this.setProps({
    // props object
})
```

# bind text

```
 <!--bind text-->
<div>{{ state.text }}</div>
<!--bind part of text-->
<div>start {{ state.text }} end</div>
```

# bind attribute

```
 <!--bind attribute value-->
<input type="text" :value="state.text" />
<!--alternative approach-->
<input type="text" value="{{ state.text }}" />
<!--bind sub attribute value, such as bind style-->
<div :style.width="state.css.width" :style.height="state.css.height" :style.background-color="state.css.background"></div>
<!-- component property name with more than 2 words, separate name with '-', such as pass vale to longName property -->
<test-cmp :long-name="value"></test-cmp>
```

# bind event

```
<!--bind event-->
<button @click="onClick()">click</button>
```

# handle nullable object

```
<!--bind nullable object variable with postfix ?-->
<div>{{ state.obj?.value }}</div>
```

# two-way binding

```
<!--two-way binding with *m-nodel-->
<input type="text" *m-model="state.value" />
```

# sample

```
<!--index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>create a binding</title>
</head>

<body>
    <div id="app">
        <!--bind text-->
        <div>{{ state.text }}</div>
        <!--bind part of text-->
        <div>start {{ state.text }} end</div>

        <!--bind attribute value-->
        <input type="text" :value="state.text" />
        <!--alternative approach-->
        <input type="text" value="{{ state.text }}" />

        <!--bind sub attribute value, such as bind style-->
        <div :style.width="state.css.width" :style.height="state.css.height" :style.background-color="state.css.background"></div>

        <!--bind event-->
        <button @click="onClick()">click</button>

        <!--bind nullable object variable-->
        <div>{{ state.obj?.value }}</div>
        <button @click="fillValue()">fill value</button>

        <!--two-way binding-->
        <input type="text" *m-model="state.value" />
        <input type="text" *m-model="state.value" />
    </div>

    <script src="../dist//automate.js"></script>

    <script>
        automate.render('#app', {
            construct: function () {
                this.state.value = 'two-way binding';
                this.state.text = 'text content';
                this.state.css = {
                    width: '100px',
                    height: '40px',
                    background: 'red'
                };
            },
            onClick: function () {
                alert('clicked');
            },
            fillValue: function () {
                this.state.obj = {
                    value: 'nullable object value'
                };
            }
        });
    </script>
</body>

</html>
```