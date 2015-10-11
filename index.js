/*!
 * has-bom-string <https://github.com/tunnckoCore/has-bom-string>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

module.exports = function hasBomString (val) {
  if (typeof val === 'string') {
    return val.charAt(0) === '\ufeff'
  }
  return false
}
