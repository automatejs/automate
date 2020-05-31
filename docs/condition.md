# conditional rendering

you are allowed to make condition logic in the template, it is achieved by directives ___m-if___, ___m-switch___, ___m-switch-when___ and ___m-switch-default___.

```
<!--if statement-->
<div *m-if="state.v1">satisfy condition</div>

<!--switch statement-->
<div *m-switch="state.v2">
    <div *m-switch-when="1">item 1</div>
    <div *m-switch-when="2">item 2</div>
    <div *m-switch-when="3">item 3</div>
    <div *m-switch-when="4">item 4</div>
    <div *m-switch-when="5">item 5</div>
    <div *m-switch-when="6">item 6</div>
    <div *m-switch-when="7">item 7</div>
    <div *m-switch-when="8">item 8</div>
    <div *m-switch-when="9">item 9</div>
    <div *m-switch-default>default</div>
</div>
```

# sample

```
<!--index.html-->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>create a condition</title>
</head>

<body>
    <div id="app">
        <!--if statement-->
        <div *m-if="state.v1">satisfy condition</div>
        <div *m-if="!state.v1">don't satisfy condition</div>
        <button @click="toggle()">toggle</button>

        <!--switch statement-->
        <div *m-switch="state.v2">
            <div *m-switch-when="1">item 1</div>
            <div *m-switch-when="2">item 2</div>
            <div *m-switch-when="3">item 3</div>
            <div *m-switch-when="4">item 4</div>
            <div *m-switch-when="5">item 5</div>
            <div *m-switch-when="6">item 6</div>
            <div *m-switch-when="7">item 7</div>
            <div *m-switch-when="8">item 8</div>
            <div *m-switch-when="9">item 9</div>
            <div *m-switch-default>default</div>
        </div>
        <button @click="switch()">switch</button>

        <!--loop statement-->
        <ol>
            <li *m-repeat="item in [1,2,3]">{{ item }}</li>
        </ol>
    </div>

    <script src="../dist//automate.js"></script>

    <script>
        automate.render('#app', {
            construct: function () {
                this.state.v1 = true;
                this.state.v2 = 1;
            },
            toggle: function () {
                this.state.v1 = !this.state.v1;
            },
            switch: function () {
                this.state.v2 = (this.state.v2 + 1) % 10;
            }
        });
    </script>
</body>

</html>
```

