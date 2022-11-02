import { Command } from 'commander'
const program = new Command()
import { createProject } from './action'

const createCommands = () => {
    // 创建文件命令
    program
        .command('create <project-name>')
        .description('create a new project')
        .option('-f --force', 'if it exist, overwrite directory')
        .action((name: string, options: any) => {
            createProject(name, options)
        })
}

export default createCommands
