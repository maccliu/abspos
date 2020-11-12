# abspos

Gets the absolute positions of a HTML element on the page. 

It returns a rect-like object this:

```js
var rect = {
  left: 9,
  right: 100,
  top: 50,
  bottom: 180,
  width: 91,
  height: 130,
};
```

## Installation

```bash
npm install abspos
yarn add abspos
```

## Usage

```js
var el = document.getSelector();
var rect = abspos();
```
