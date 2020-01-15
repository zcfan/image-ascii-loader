const { parseQuery } = require('loader-utils');
const AsciiArtImage = require('ascii-art-image');
const stripAnsi = require('strip-ansi');

module.exports.pitch = function() {
  const callback = this.async();
  const image = new AsciiArtImage(getOptions.call(this));
  image.write((err, ascii) => {
    if (err) {
      callback(err);
    } else {
      callback(null, processAscii(ascii));
    }
  })
};

function getOptions() {
  const options = {
    width: 80,
    alphabet: 'hatching'
  };
  if (this.resourceQuery) {
    const queryOptions = parseQuery(this.resourceQuery);
    if (queryOptions.width) {
      queryOptions.width = parseInt(queryOptions.width);
    }
    Object.assign(
      options,
      queryOptions
    )
  }
  options.filepath = this.resourcePath
  return options;
}

function processAscii(ascii) {
  const html = stripAnsi(ascii)
    .replace(/\n/g, '<br/>')
    .replace(/ /g, '&nbsp;');
  return `export default \`${html}\``;
}