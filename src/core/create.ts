const program = require('commander')
import { createProject } from './action'

const createCommands = () => {
    // 创建文件命令
    program
        .command('create <project-name>')
        .description('create a new project use template')
        .option('-f --force', 'if it exist, overwrite directory')
        .action((name: string, options: any) => {
            createProject(name, options)
        })
}
module.exports = createCommands