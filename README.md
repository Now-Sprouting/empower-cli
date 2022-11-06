# empower-cli

## 一、开发
使用ts+esbuild搭建自定义cli脚手架，包含热更新
### 1 安装依赖
``` shell
$ npm install
```
### 2 启动项目（打包lib文件）
``` shell
$ npm run dev
```
### 3 全局挂载 npm link
```shell
$ npm link
```
或
```shell
$ sudo npm link
```
### 4 验证cli执行指令是否成功
```shell
$ emp --help
```


## 二、使用
该 cli 目前集成以下功能
### create
在当前目录下选择模板(`Vue`, `React`)创建项目,例如：
``` shell
emp create demoProject
```
如果当前目录存在 `demoProject` 文件，可使用 `--force`强行覆盖。
``` shell
emp create demoProject --force
``` 
