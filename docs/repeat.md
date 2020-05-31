# list rendering

Create a loop in the template is also possible, automate will render the specified template repeatedly accroding to data bound, directive ___m-repeat___ is responsible for this feature.

```
<ul>
    <li *m-repeat="item in state.items" *m-bind="item.value"></li>
</ul>
```

# sample

```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>create a loop</title>
</head>

<body>
    <div id="app">
        <ul>
            <li *m-repeat="item in state.items" *m-bind="item.value"></li>
        </ul>
        <button @click="addItem()">add</button>
        <button @click="sort()">sort</button>
    </div>

    <script src="../dist//automate.js"></script>

    <script>
        automate.render('#app', {
            construct: function () {
                this.state.items = [];
                this.makeItems(10);
            },
            makeItem: function () {
                return {
                    value: Math.round(Math.random() * 1000)
                };
            },
            makeItems: function (count) {
                while (count > 0) {
                    this.state.items.push(this.makeItem());
                    count--;
                }
            },
            addItem: function () {
                var item = this.makeItem();
                this.state.items.push(item);
            },
            sort: function () {
                this.state.items.sort(function (a, b) {
                    return a.value - b.value;
                });
            }
        });
    </script>
</body>

</html>
```