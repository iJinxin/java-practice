/**
 * 生产环境
 * 提取共用模块，第三方资源打包长缓存，全局变量管理，懒加载，代码压缩，拆分chunk
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// 提取css代码
// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 在生产环境压缩css代码
// https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const commonWebpackConfig = require('./webpack.common.js');

// 设置NODE_ENV为生产环境
process.env.NODE_ENV = 'production';

const prodWebpackConfig = merge(commonWebpackConfig, {
  mode: 'production',
  module: {

  },
  devtool: {},
  // 打包后的文件放置在根目录下的dist文件中
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: path.resolve(__dirname, '../dist', '/js/[name].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'production'
    }),

    // 代码压缩
    // keep module.id stable，node_modules包更新频率低，可长缓存在客户端。
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});