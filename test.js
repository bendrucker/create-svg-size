'use strict'

var test = require('tape')
var size = require('./')

test(function (t) {
  t.throws(size)
  t.deepEqual(size({x: 10, y: 20}), {
    width: '10px',
    height: '20px',
    viewBox: '0 0 10 20'
  })
  t.end()
})
