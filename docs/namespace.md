# Namespace

automate.js organize component, directive, filter and service with namespace strategy, so if there are key name conflict between different namespaces, you can add namespace before key name to identify them.

assuming there is same component name "viewer" for namesace "ns1" and "ns2"

```
automate.namesace('ns1').component('viewer' ,{
    // definition
});

automate.namesace('ns2').component('viewer' ,{
    // definition
});
```

```
<!-- viewer from "ns1" -->
<ns1.viewer></ns1.viewer>

<!-- viewer from "ns2" -->
<ns2.viewer></ns2.viewer>
```

# Key

The key name is the identifier of itself, automate finds respective object by it.

> for key name with more than 2 words, you must separate name with separator "-"

## can't be recognized

```
automate.namesace('ns2').component('longName' ,{
    // definition
});

<!-- can't be recognized -->
<longName><longName>
```

## can be recognized

```
automate.namesace('ns2').component('longName' ,{
    // definition
});

<!-- can be recognized -->
<long-name><long-name>
```