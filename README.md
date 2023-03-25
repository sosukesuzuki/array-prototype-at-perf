# `arr[arr.length - 1]` VS `arr.at(-1)` performance

## Node.js v16

```
array[array.length -1] 47.548583984375 ms
array.at(-1)           2733.349083006382 ms

```

## Node.js v18

```
array[array.length -1] 47.59833401441574 ms
array.at(-1)           2463.5460420250893 ms

```

## Node.js v19

```
array[array.length -1] 47.45416694879532 ms
array.at(-1)           62.53858298063278 ms

```
# array-prototype-at-perf
