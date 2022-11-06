const program = require('commander')
import { createProject, CreateProjectOption } from '../action/createProject'
import { addPage, AddPageOption } from '../action/addPage'

const createCommands = () => {
    // 创建项目命令
    program
        .command('create <project-name>')
        .description('create a new project use template')
        .option('-f --force', 'if it exist, overwrite directory')
        .action((name: string, options: CreateProjectOption) => {
            createProject(name, options)
        })

    // 创建页面
    program
        .command('addpage <name>')
        .description('增加页面, 例: emp addpage Home --type=vue --dest=src/pages')
        .option('--type <type>', '选择组件类型 vue|react')
        .option('--dest <dest>', '设置增加组件到哪个位置，默认 src/page')
        .action((name: string, option: AddPageOption) => {
            addPage(name, option)
        })
}
module.exports = createCommands