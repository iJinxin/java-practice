const path = require('path');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//
const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: []
      }
    ]
  }
};