# Filter

Filter is a singleton used to transform value pass to the template, it helps in data filtering and formating.

# Create

```
automate.namespace('sample').filter('removeNull', {
    onTransform: function (list) {
        for (var i = list.length - 1; i >= 0; i--) {
            if (typeof list[i] === 'undefined' ||
                list[i] === null) {
                list.splice(i, 1);
            }
        }
        return list;
    }
});
```

# Usage

```
<li *m-repeat="item in data | removeNull">{{ item }}</li>
```

# Pass arguments

```

```

# Sample

```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Filter</title>
</head>

<body>
    <div id="app">
        <ul>
            <li *m-repeat="item in data | removeNull">{{ item }}</li>
        </ul>
    </div>
    <script src="../dist//automate.js"></script>
    <script>
        automate.namespace('sample').filter('removeNull', {
            onTransform: function (list) {
                for (var i = list.length - 1; i >= 0; i--) {
                    if (typeof list[i] === 'undefined' ||
                        list[i] === null) {
                        list.splice(i, 1);
                    }
                }
                return list;
            }
        });

        automate.render('#app', {
            construct: function () {
                this.data = [1, 2, 3, null, 5];
            }
        });
    </script>
</body>

</html>
```

# Lyfecycle Hoops

## onTransform

Called when filter is applied, transform target value pass to the template