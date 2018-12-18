# numbermap

Simply adds a Map function to `Number` prototype

# Initialization

`require('numbermap')()`
It initializes .map to `Number` prototype

# Example

Creating an array of 30 1's:
```
(30).map(e => 1)
//Returns [1, 1, 1, 1, ..., 1]
```

Creating an array from 1 to n:
```
(n).map(e => e + 1)
//Returns [1, 2, 3, ..., n]
```
