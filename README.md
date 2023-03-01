# React Global Loading

![Example](/assets/example.png)

[![npm version](https://badge.fury.io/js/rc-helper.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/rc-helper.svg)][npm_url]
[![license](https://img.shields.io/npm/l/rc-helper.svg)][npm_url]

[npm_url]: https://www.npmjs.org/package/rc-helper

React simple global loading package

## Installation

With Yarn:

```bash
yarn add rc-helper
```

With npm:

```bash
npm install --save rc-helper
```

# General Helper

## isObjectExistKeys

A function that checks if an object has at least one key.

### Parameters

- `data` (object): The object to check.

### Returns

- (boolean): Returns `true` if the object has at least one key, else `false`.

### Example

```js
const obj1 = { a: 1, b: 2 };
const obj2 = {};
const obj3 = null;

isObjectExistKeys(obj1); // true
isObjectExistKeys(obj2); // false
isObjectExistKeys(obj3); // false
```

# String Helper

### removeSpace

Removes all spaces in a given string.

### Parameters

- `string`: A string value to remove spaces.

### Returns

- Returns a string value without spaces.

### Throws

- Throws a TypeError if the input is not a string.

### Example

```js
const result = removeSpace(" hello  world ");
console.log(result); // "helloworld"
```
