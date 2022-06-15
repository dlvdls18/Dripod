# Dripod

![Dripod](dripod.png)

Modify, insert and destroy bytes from JavaScript String

```js
Dripod("hello", {
  dest_0: true,
  ins_5: 10111010,
  mod_4: 10011011,
  mod_2_at_1: 1
});
```

# Installation
```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/Dripod@main/src/dripod.js"></script>
```

# Usage

## Arguments
- `String` : String to convert and modify
- `Object` : Configuration

## Get String Bytes
```js
Dripod("hello");
// returns array number
```

## Bytes Configuration
### Inserting bytes
Use the key `ins_<byte-index>`. range of 0 to _&lt;string-length&gt;_.

```js
Dripod("hello", {
  //ins_0: 1,
  ins_1: 1
  /*ins_2: 1,
  ins_3: 1,
  ins_4: 1,
  ins_5: 1*/
});
// [..., 1, ..., ..., ..., ...]
```

Insertion: `[ byte0, ins_0, byte1, ...]`


### Modifying bytes
Use the key `mod_<byte-index>`. range of 0 to _&lt;string-length&gt;_ - 1.

```js
Dripod("hello", {
  mod_0: 1
});
// [1, ..., ..., ..., ...]
```


### Destroying bytes
Use the key `dest_<byte-index>`. range of 0 to _&lt;string-length&gt;_ - 1.

```js
Dripod("hello", {
  dest_0: true // must be true
});
// [..., ..., ..., ...]
```


## Bit Configuration
To modify the bit, specify which byte is to modify.

- `dest_<byte-index>_at_<bit_index>`
- `mod_<byte-index>_at_<bit_index>`
- `ins_<byte-index>_at_<bit_index>`
