# `arr[arr.length - 1]` VS `arr.at(-1)` performance

## Node.js v16

```
array[array.length -1] 50.739000022411346 ms
array.at(-1)           2789.429582953453 ms
```

## Node.js v18

```
array[array.length -1] 50.60674995183945 ms
array.at(-1)           2596.4409170150757 ms
```

## Node.js v19

```
array[array.length -1] 50.40716600418091 ms
array.at(-1)           66.40716695785522 ms
```
