/**
 * 生产环境
 * 提取共用模块，第三方资源打包长缓存，全局变量管理，懒加载，代码压缩，拆分chunk
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 提取css代码
// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 在生产环境压缩css代码
// https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonWebpackConfig = require('./webpack.common.js');
const config = require('./config');

// 设置NODE_ENV为生产环境
process.env.NODE_ENV = 'production';

const prodWebpackConfig = merge(commonWebpackConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: config.build.devtool,
  // 打包后的文件放置在根目录下的dist文件中
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': 'production'
    }),

    // 提取css
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css' // 按需加载时使用
    }),

    // 生成发布版的index.html
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true
    }),
    // 代码压缩
    // keep module.id stable，node_modules包更新频率低，可长缓存在客户端。
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    minimizer: [
      // js压缩
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set true if you want js source maps
      }),
      // css压缩
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: 'single',
    // js分片 https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks
    // node_modules 被引用模块单独打包
    // 不属于node_modules的公用模块打包
    splitChunks: {
      chunks: 'all',  // all, async异步, inline同步
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: 0,
          minChunks: 1,
          name: 'vendors'
        },
        common: {
          test: /[\\/]src[\\/]/,
          minChunks: 2,
          name: 'commons'
        }
      }
    }
  }
});

module.exports = prodWebpackConfig;