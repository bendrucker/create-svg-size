# create-svg-size [![Build Status](https://travis-ci.org/bendrucker/create-svg-size.svg?branch=master)](https://travis-ci.org/bendrucker/create-svg-size) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/create-svg-size.svg)](https://greenkeeper.io/)

> Create an svg object with a given x/y width/height


## Install

```
$ npm install --save create-svg-size
```


## Usage

```js
var size = require('create-svg-size')

size({x: 10, y: 20})
//=> {width: '10px', height: '20px', viewBox: '0 0 10 20'}
```

## API

#### `size(dimensions)` -> `object`

##### dimensions

*Required*  
Type: `object`

An object with x/y dimensions for the svg. The dimensions can also contain an optional `responsive` boolean that will set the width/height to 100% but set the `viewBox` appropriately.


## License

MIT © [Ben Drucker](http://bendrucker.me)
