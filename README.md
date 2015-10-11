# [has-bom-string][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Returns true if string has a byte order mark (BOM)

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i has-bom-string --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var hasBomString = require('has-bom-string')

hasBomString('\ufefffoo')
// => true

hasBomString('foo')
// => false
hasBomString(new Buffer('\ufefffoo'))
// => false
hasBomString(new Buffer('foo'))
// => false
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/has-bom-string/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/has-bom-string
[npmjs-img]: https://img.shields.io/npm/v/has-bom-string.svg?label=has-bom-string

[license-url]: https://github.com/tunnckoCore/has-bom-string/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/has-bom-string
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/has-bom-string.svg

[travis-url]: https://travis-ci.org/tunnckoCore/has-bom-string
[travis-img]: https://img.shields.io/travis/tunnckoCore/has-bom-string.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/has-bom-string
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/has-bom-string.svg

[david-url]: https://david-dm.org/tunnckoCore/has-bom-string
[david-img]: https://img.shields.io/david/tunnckoCore/has-bom-string.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg