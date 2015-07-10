# ember-cli-encore

`ember-cli-encore` is an adapter and a serializer to use with the [Encore](https://github.com/mirego/encore) gem.

## Deprecation notice

:warning: This repository is now deprecated since the `encore` gem is also deprecated.

## Usage

```js
// adapters/application.js
import Adapter from 'ember-cli-encore/adapter';
export default Adapter.extend({
  // ember-cli-encore’s adapter extends the DS.RESTAdapter
  // so you can use all the same options here
});
```

## License

`ember-cli-encore` is © 2015 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).
See the [`LICENSE.md`](https://github.com/mirego/ember-cli-encore/blob/master/LICENSE.md) file.

## About Mirego

[Mirego](http://mirego.com) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](http://life.mirego.com) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://mirego.org).

We also [love open-source software](http://open.mirego.com) and we try to give back to the community as much as we can.
