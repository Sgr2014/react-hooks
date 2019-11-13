This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:
```
`npm start` // 启动项目
```

## JSX
是一种JS的语法扩展，其格式比较像模板语言，但事实上完全是在JS内部实现的。
实质上是React.createElement的调用

## 组件
抽象的独立功能模块，react应用程序是由组件构建而成
### 组件的 2 种形式
+ class组件
  - 通常拥有状态和生命周期
  - 继承于Component
  - 实现render方法
+ function组件
  - 通常无状态
    * React16.8开始引入hooks,函数组件也拥有状态
  - 仅关注内容展示，返回渲染结果
### 组件状态管理
+ 类组件中状态管理<br/>
  setState只有在合成事件或生命周期函数中是异步的，在原生事件addEventListener、
  setTimeout或setInterval等都是同步的。
  - setState
    * 是异步的
    * 修改状态必须用setState，不能直接state.x
    * 批量操作
      + 多次修改同一个状态仅更新一次
      + 需要同时修改多个状态可一起进行
  - setState是异步的，获取最新值
    * 本身回调
    * setTimeout、setInterval...
    * 原生事件addEventListener等

