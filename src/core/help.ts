import figlet from 'figlet'
import chalk from 'chalk'
import { Command } from 'commander'
const program = new Command()

// 配置帮助信息
const helpOptions = () => {
    console.log(program.on);
    // program.on('--help', () => {
    //     console.log(
    //         '\r\n' +
    //         figlet.textSync('dong.yi', {
    //             font: 'Ghost',
    //             horizontalLayout: 'default',
    //             verticalLayout: 'default',
    //         }),
    //     )
    //     console.log(
    //         `\r\n Run ${chalk.green(
    //             `dyi <command> --help`,
    //         )} to understand the details \r\n `,
    //     )
    // })

    program.on('--help', function() {
        console.log(123);
    })
}


export default helpOptions
