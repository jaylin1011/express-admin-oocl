# 项目运行

```javascript
// 安装模块依赖
npm install
// 运行项目
npm run dev
// Note：开发中使用nodemon，所以运行项目前请确保本地环境中有安装nodemon，或者将package.json的nodemon修改为node也可以运行
```

# 项目描述

一个使用Epress框架搭建的后端服务器，使用，实现后台管理接口和前端移动端网页接口

本项目基本不涉及SSR（服务端渲染），前后端分离

前端实现在其他项目，由vuejs + Element搭建后台管理系统和由vuejs + MintUI实现的移动端应用

数据库： MongoDB数据库

API风格：RESTful

项目目录仿照MVC结构，此处不一一赘述

# 项目相关模块

- chalk——控制台打印优化
- babel——转码，使用ES6模块化等
- eslint——代码检测
- mongoose——MongoDB数据库操作
- cors——跨域资源共享
- bcryptjs——密码散列加密
- jwt——生成token
- passport——权限校验，用户授权
- passport-jwt——token解析校验
- http-assert ——统一响应机制模块
- validator ——字符串验证工具库

# 项目相关功能

- 后端跨域处理
- 用户注册登录
- 用户管理





















