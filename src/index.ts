#! /usr/bin/env node
import { Command } from 'commander'
import pkg from '../package.json'
const program = new Command()
import createCommands from './core/create'
import helpOptions from './core/help'

// 配置版本号信息
program.version(pkg.version).usage('<command> [option]')

// 创建命令
createCommands()

// 给--help增加其他选项
helpOptions()


// 解析参数
program.parse(process.argv)
