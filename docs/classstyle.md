# bind class and style

Accoring to the user interface programing practice, we often need to modify the class and style dynamically, but it is not very convinent to operate string value. In order to simplify thr process, for class, you can bind an array object, for style, you can bind a plain object.

# bind class

```
<!-- template -->
<div *m-class="state.cls">content</div>

automate.render('#app', {
        construct: function () {
            this.state.cls = ['error'];
        },
        change: function () {
            this.state.cls = ['warning'];
        }
    });
```
# bind style

```
<!-- template -->
<div *m-style="state.css">content</div>

automate.render('#app', {
        construct: function () {
            this.state.css = {
                'background-color': 'blue'
            };
        },
        change: function () {
            this.state.css = {
                'background-color': 'white'
            };
        }
    });
```

# sample

```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>style</title>

    <style type="text/css">
    .error {
        color: red;
    }

    .warning {
        color: yellow;
    }
    </style>
</head>
<body>
<div id="app">
    <div *m-style="state.css" *m-class="state.cls">content</div>
    <button @click="change()">change</button>
</div>
<script src="../dist//automate.js"></script>
<script>
    automate.render('#app', {
        construct: function () {
            this.state.css = {
                'background-color': 'blue'
            };
            this.state.cls = ['error'];
        },
        change: function () {
            this.state.css = {
                'background-color': 'white'
            };
            this.state.cls = ['warning'];
        }
    });
</script>
</body>
</html>
```