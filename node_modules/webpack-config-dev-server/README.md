# webpack-config-dev-server

Setup a development server for [webpack] with [webpack-udev-server].

![build status](http://img.shields.io/travis/webpack-config/webpack-config-dev-server/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-dev-server/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-dev-server.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-dev-server.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-dev-server.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-dev-server
```

Add to your `webpack.config.babel.js`:

```javascript
import devServer from `webpack-config-dev-server`;

devServer()({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
[webpack-udev-server]: https://github.com/izaakschroeder/webpack-udev-server
