import chalk from 'chalk'
import figlet from 'figlet'
const program = require('commander')

// 配置帮助信息
const helpOptions = () => {
    program.on('--help', () => {
        console.log(
            '\r\n' +
            chalk.hex('#5207dd').bold(figlet.textSync('empower', {
                font: 'Slant',
                horizontalLayout: 'default',
                verticalLayout: 'default',
            }))
        )
    })
}

module.exports = helpOptions
