# image-ascii-loader
A webpack loader that load image as ascii text.

## Demo

Generate this

![demo](https://github.com/zcfan/image-ascii-loader/raw/master/doc/demo.png)

from

![demo](https://github.com/zcfan/image-ascii-loader/raw/master/demo/demo.jpg)

feel free to clone and play with demo project.

## Guide

```bash
npm i -D image-ascii-loader
```

then edit your `webpack.config.js` .

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: ["image-ascii-loader"]
      }
    ]
  },
};
```

With this config, all your jpeg file will be tranform to string, usually this is not what you want. You can skip configuration and do this instead:

```javascript
const ascii = require('image-ascii-loader!./demo.jpg');

document.getElementById('demo').innerHTML = ascii;
```

You can specify options use resourceQuery:

```javascript
// 100 characters per line 
const ascii = require('./demo.jpg?width=100');

// use other characters to draw the image
const ascii = require('./demo.jpg?alphabet=blocks');
```

check [ascii-art-image](https://www.npmjs.com/package/ascii-art-image) for more options.

## More

![I like this one](https://github.com/zcfan/image-ascii-loader/raw/master/doc/demo1.png)

Image source: readme of https://github.com/khrome/ascii-art project