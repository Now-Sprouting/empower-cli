import { existsSync, remove } from 'fs-extra'
import { prompt } from 'inquirer'
import ora from 'ora'
import path from 'path'
import { TextColor, TemplateConfig } from '../constants'

const { promisify } = require('util');
const shell = require('shelljs')
const downloadRepo = promisify(require('download-git-repo'));

export type CreateProjectOption = {
    force?: boolean
}
export const createProject = async (name: string, options: CreateProjectOption) => {
    // 获取当前位置
    const cwd = process.cwd()
    // 需要创建的文件
    const targetPath = path.join(cwd, name)
    const { projectUrl } = await prompt({
        name: 'projectUrl',
        type: 'list',
        choices: TemplateConfig,
        message: '请选择一个项目模版进行创建',
    })

    // 判断目录是否已存在
    if (existsSync(targetPath)) {
        // 强制替换
        if (options.force) {
            await remove(targetPath)
        } else {
            const { replace } = await prompt([
                {
                    name: 'replace',
                    type: 'list',
                    message: `项目已存在、是否确认覆盖? ${TextColor.desc(
                        '覆盖后原项目无法恢复',
                    )}`,
                    choices: [
                        { name: '确认覆盖', value: true },
                        { name: '再考虑下，暂不覆盖', value: false },
                    ],
                },
            ])
            if (!replace) {
                return
            }
            await remove(targetPath)
        }
    }

    const spinner = ora({
        text: 'Downloading Template...',
        spinner: 'aesthetic',
    })

    spinner.start()

    if (!shell.which('git')) {
        console.log(TextColor.error('\n 🔴 Sorry, this script requires git, please install it'));
        shell.exit(1);
    }

    // 复制项目模版
    await downloadRepo(projectUrl, name, { clone: true });
    spinner.succeed()
    console.log(
        `${TextColor.success('\n 🟢 Successfully Create Project')}  ${TextColor.primary(name)}`,
    )
}