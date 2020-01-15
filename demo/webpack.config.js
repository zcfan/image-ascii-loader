const path = require("path");

module.exports = {
  mode: "development",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: [
          {
            loader: path.resolve('../lib/index.js')
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    hot: true
  }
};