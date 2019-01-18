## webpack practice

## 初衷
一直以来开发项目都是使用**-cli，没有系统化学习webpack。vue-cli3把webpack配置装进了黑盒，看不见内部代码，着实不习惯。
一方面，这种看不见代码的开发方式让我有点慌，另一方面vue-cli2使用的是webpack3，是时候学习webpack，自定义配置了。

## 结构
<code>
/build
  config.js         // server，path等基本配置
  utils.js          // 工具集，function list
  webpack.common.js // 公用配置
  webpack.dev.js    // 开发环境配置
  webpack.prod.js   // 生产环境配置
</code>

## 任务
### css

### js
#### common
代码编译，需要将ES6+编译
依赖 @babel-loader @babel/core @babel/preset-env @babel/runtime @babel/plugin-transform-runtime

#### dev
热更新

#### prod
node_modules依赖提取，长缓存
公用模块识别，提取
业务模块
脚本合并，压缩，去注释 - 混淆压缩