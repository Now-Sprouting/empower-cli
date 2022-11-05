const program = require('commander')
import { createProject, CreateProjectOption } from '../action/createProject'

const createCommands = () => {
    // 创建文件命令
    program
        .command('create <project-name>')
        .description('create a new project use template')
        .option('-f --force', 'if it exist, overwrite directory')
        .action((name: string, options: CreateProjectOption) => {
            createProject(name, options)
        })
}
module.exports = createCommands