# Service

Service is a singleton that can be wired with components, directives, filters or other services via Dependency Injection, this helps in dividing the web application into small, different logical units which can be reused.

# Create

```
 automate.namespace('sample').service('myService', {
        construct: function() {
            this.data = [1,2,3];
        },
        getData: function () {
            return this.data;
        }
    });
```

# Usage

you can inject services via ___inject___ metadata configuration

```
{
    inject: {
        myService: 'myService'
    }
}
```

# Sample

```
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service</title>
</head>

<body>
<div id="app">
    <ul>
        <li *m-repeat="item in data">{{ item }}</li>
    </ul>
</div>
<script src="../dist//automate.js"></script>
<script>
    automate.namespace('sample').service('myService', {
        construct: function() {
            this.data = [1,2,3];
        },
        getData: function () {
            return this.data;
        }
    });

    automate.namespace('sample').render('#app', {
        construct: function() {
            this.data = this.myService.getData();
        }
    }, {
        inject: {
            myService: 'myService'
        }
    });
</script>
</body>

</html>
```