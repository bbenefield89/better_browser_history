const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  popup,
  options
];