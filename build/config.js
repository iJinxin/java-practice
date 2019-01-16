const path = require('path');

module.exports = {
  dev: {
    // dev server
    host: 'localhost',
    port: '8081',
    // 开发环境需要能在开发者工具中查看源码，项目快速rebuild
    // https://webpack.js.org/configuration/devtool/
    devtool: 'cheap-module-eval-source-map'
  },

  build: {
    // path，打包后文件存储路径
    assetsRoot: path.resolve(__dirname, '../dist'),

    // 发布环境更关心代码体积
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'hidden-source-map'
  }
};