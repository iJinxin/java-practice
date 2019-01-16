## webpack practice

## 初衷
一直以来开发项目都是使用**-cli，没有系统化学习webpack。vue-cli3把webpack配置装进了黑盒，看不见内部代码，着实不习惯。
一方面，这种看不见代码的开发方式让我有点慌，另一方面vue-cli2使用的是webpack3，是时候学习webpack，自定义配置了。

## 任务
### dev
- 热更新
- 良好的错误提示

### prod
- 提取共用模块
- 合并node_modules模块
- 拆分chunk
- 懒加载
- 全局变量管理

### common
- dev和prod共用配置
- 各种loader

### utils
共用function