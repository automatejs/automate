# what is it

automate is a JavaScript library for building web user interface, it lets you encapsulate user interface code as "Component", then compose them to make complex UIs. It is also a implementation of JavaScript MVVM pattern, it will update ui while data change in view model.

automate provides progressive development style, developer can build component in script directily or do it with JavaScript module tools, such as webpack.

# compatibility

automate is designed for modern browser, it uses ES6 ___Proxy___ object to detect data change.

# sample

```
<!--index.html-->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>quick start</title>
</head>

<body>
    <div id="app">
        <input *m-model="state.todo" placeholder="something to do" /> <button @click="send()">send</button>
        <ul><li *m-repeat="item in state.items" *m-bind="item"></li></ul>
    </div>

    <script src="../dist//automate.js"></script>

    <script>
        automate.render('#app', {
            construct: function () {
                this.state.todo = '';
                this.state.items = [];
            },
            send: function () {
                if(this.state.todo) {
                    this.state.items.push(this.state.todo);
                    this.state.todo = '';
                }
            }
        });
    </script>
</body>

</html>
```
