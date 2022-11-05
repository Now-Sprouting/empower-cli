import figlet from 'figlet'
const program = require('commander')
import { TextColor } from '../constants'

// 配置帮助信息
const helpOptions = () => {
    program.on('--help', () => {
        console.log(
            TextColor.primary(figlet.textSync('empower', {
                font: 'Slant',
                horizontalLayout: 'default',
                verticalLayout: 'default',
            }))
        )
    })
}

module.exports = helpOptions
