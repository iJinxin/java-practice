/**
 * 开发环境
 * 热更新，错误提示
 * 启动服务
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const commonWebpackConfig = require('./webpack.common.js');

const devWebpackConfig = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: false, // what is CopyWebpackPlugin
    hot: true   // hot
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),  // HMR shows correct file name in console on update
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets'),
        to: './',
        ignore: ['.*']
      }
    ])
  ]
});

module.exports = new Promise((resolve, reject) => {
  devWebpackConfig.devServer.port = '3000';

  // add friendlyErrorsPlugin
  devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: [`your application is running at here http://${devWebpackConfig.devServer.host}:${devWebpackConfig.devServer.port}`]
    },
    onErrors: undefined
  }));
  resolve(devWebpackConfig);
});