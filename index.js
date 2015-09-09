'use strict'

var assert = require('assert-ok')

module.exports = function svgSize (size) {
  assert(size && size.x && size.y, 'svg size with x/y required')

  var x = size.x
  var y = size.y

  return {
    width: x + 'px',
    height: y + 'px',
    viewBox: [0, 0, x, y].join(' ')
  }
}
