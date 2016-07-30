var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: './dist/app.bundle.js',
    publicPath: ''
  },

  module: {
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },

    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
