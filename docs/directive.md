# Directive

Directives are used to extend functionality of html by custom attributes to provide certain behavior to an html tag.

# Create

```
automate.namespace('sample').directive('showComponentKey', {
    afterLink: function () {
        this.$element.style.border = "1px solid #cccccc";
        this.$element.innerHTML = "Name: <b>" + this.$scope.$$metadata.key + "</b>";
        this.$element.style.backgroundColor = "#ff00ff";
    }
});
```

# Usage

```
<div *show-component-name></div>
```

# Sample

```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directive</title>
</head>

<body>
    <div id="app">
        <div *show-component-key></div>
    </div>
    <script src="../dist//automate.js"></script>
    <script>
        automate.namespace('sample').directive('showComponentKey', {
            afterLink: function () {
                this.$element.style.border = "1px solid #cccccc";
                this.$element.innerHTML = "Name: <b>" + this.$scope.$$metadata.key + "</b>";
                this.$element.style.backgroundColor = "#ff00ff";
            }
        });

        automate.namespace('sample').render('#app');
    </script>
</body>

</html>
```

# Life cycle hoops

## onCompile

Called when the template is being compiling, the bindings are not linkd to component, you can handle binging text, virtual nodes here

## onLink

Called when onCompile hoop returns true, it is responsible for providing html html nodes for renderer engine.

## afterLink

Called after templated is rendered, html elements are available.

## onChange

Called whenever one-way bindings are updated, it has two arguments: (newValue, oldValue)

## onDestroy

Called when it is destroyed. Use this hook for releasing external resources, watches and event handlers.