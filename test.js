/*!
 * has-bom-string <https://github.com/tunnckoCore/has-bom-string>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var hasBomString = require('./index')

test('should return true if a string has a bom', function (done) {
  test.strictEqual(hasBomString('\ufefffoo'), true)
  done()
})

test('should return false if not a string', function (done) {
  test.strictEqual(hasBomString(123), false)
  done()
})

test('should return false if a string does not have a bom', function (done) {
  test.strictEqual(hasBomString('foo'), false)
  done()
})

test('should return false if a buffer has a bom', function (done) {
  test.strictEqual(hasBomString(new Buffer('\ufefffoo')), false)
  done()
})

test('should return false if a buffer does not have a bom', function (done) {
  test.strictEqual(hasBomString(new Buffer('foo')), false)
  done()
})
