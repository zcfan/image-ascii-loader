"use strict";

var _require = require('loader-utils'),
    parseQuery = _require.parseQuery;

var AsciiArtImage = require('ascii-art-image');

var stripAnsi = require('strip-ansi');

module.exports.pitch = function () {
  var callback = this.async();
  var image = new AsciiArtImage(getOptions.call(this));
  image.write(function (err, ascii) {
    if (err) {
      callback(err);
    } else {
      callback(null, processAscii(ascii));
    }
  });
};

function getOptions() {
  var options = {
    width: 80,
    alphabet: 'hatching'
  };

  if (this.resourceQuery) {
    var queryOptions = parseQuery(this.resourceQuery);

    if (queryOptions.width) {
      queryOptions.width = parseInt(queryOptions.width);
    }

    Object.assign(options, queryOptions);
  }

  options.filepath = this.resourcePath;
  return options;
}

function processAscii(ascii) {
  var html = stripAnsi(ascii).replace(/\n/g, '<br/>').replace(/ /g, '&nbsp;');
  return "export default `".concat(html, "`");
}