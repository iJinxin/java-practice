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
const config = require('./config');

// 设置NODE_ENV为开发环境
process.env.NODE_ENV = 'development';

const devWebpackConfig = merge(commonWebpackConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: config.dev.devtool,
  devServer: {
    contentBase: false, // what is CopyWebpackPlugin
    hot: true,   // hot
    host: config.dev.host,
    port: config.dev.port
  },
  plugins: [
    // HMR热更新
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),  // HMR shows correct file name in console on update
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  // add friendlyErrorsPlugin
  devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: [`your application is running at here http://${devWebpackConfig.devServer.host}:${devWebpackConfig.devServer.port}`]
    },
    onErrors: undefined
  }));
  resolve(devWebpackConfig);
});