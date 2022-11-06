const path = require('path');
import { TextColor } from '../constants/index'
const { ejsCompile, writeFile, mkdirSync } = require('../utils/file');

export type AddPageOption = {
    type?: 'react' | 'vue'
    dest?: string
}

const handleEjsToFile = async (name = '', dest = '', template = '', filename = '') => {
    // 1.获取模块引擎的路径
    const templatePath = path.resolve(__dirname, template);
    const result = await ejsCompile(templatePath, { name, lowerName: name.toLowerCase() }) as string;


    // 2.写入文件中
    // 判断文件不存在,那么就创建文件
    mkdirSync(dest);
    const targetPath = path.resolve(dest, filename);
    writeFile(targetPath, result);
}


export const addPage = async (name = '', option: AddPageOption) => {
    const { type = 'vue', dest = `src/pages/${name.toLowerCase()}` } = option
    console.log(name, type, dest);
    let fileName = ''
    if (type === 'vue') {
        fileName = `${name}.vue`
    } else if (type === 'react') {
        fileName = `${name}.tsx`
    } else {
        console.log(TextColor.error('🔴 暂时不存在该类型模版文件，请使用--type=vue 或 --type=react'));
        return
    }
    handleEjsToFile(name, dest, `../template/${type}/component.ejs`, fileName)
}
