const HtmlWebpackPlugin = require('html-webpack-plugin');

const background = {
  entry: './dev/js/background.js',
  output: {
    path: __dirname + '/build/js',
    filename: 'background.js'
  },
  devtool: 'sourcemap',
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../html/background.html',
      hash: true,
    })
  ],
  mode: 'development'
};

const popup = {
  entry: './dev/js/popup.js',
  output: {
    path: __dirname + '/build/js',
    filename: 'popup.js'
  },
  devtool: 'sourcemap',
  plugins:[
    new HtmlWebpackPlugin({
      filename: '../html/popup.html',
      hash: true,
      template: './dev/html/popup.html'
    })
  ],
  mode: 'development'
};

const options = {
  entry: './dev/js/options.js',
  output: {
    path: __dirname + '/build/js',
    filename: 'options.js'
  },
  devtool: 'sourcemap',
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../html/options.html',
      hash: true,
      template: './dev/html/options.html'
    })
  ],
  mode: 'development'
};

module.exports = [
  background,
  popup,
  options
];