#! /usr/bin/env node
// commander 通过 esmodule 方式导入并通过esbuild打包存在问题，暂时使用 cjs方式引入
const program = require('commander')
const createCommands = require('./core/create')
const helpOptions = require('./core/help')
import pkg from '../package.json'

// 配置版本号信息
program.version(pkg.version).usage('<command> [option]')

// 创建命令
createCommands()

// 给--help增加其他选项
helpOptions()


// 解析参数
program.parse(process.argv)
