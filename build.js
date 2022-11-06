const esbuild = require('esbuild')
const path = require('path')
const glob = require('glob')
const chalk = require('chalk')
const fs = require('fs-extra')
const isProd = process.env.NODE_ENV == 'production'
const libPath = path.join(process.cwd(), 'lib')
const copyStaticFiles = require('esbuild-copy-static-files')

/** 假如lib文件夹已存在，则清空 */
if (fs.existsSync(libPath)) {
  fs.emptyDirSync(libPath)
}

/** 匹配src文件夹下所有ts文件 */
const matchFiles = async () => {
  return await new Promise((resolve) => {
    glob('src/**/*.ts', { root: process.cwd() }, function (err, files) {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      resolve(files)
    })
  })
}
/** esbuild 配置 */
const build = async function () {
  await esbuild.build({
    entryPoints: await matchFiles(),
    bundle: false,
    splitting: false,
    outdir: path.join(process.cwd(), 'lib'),
    format: 'cjs',
    platform: 'node',
    minify: false,
    color: true,
    sourcemap: false,
    loader: {
      ".ts": 'ts'
    },
    plugins: [
      copyStaticFiles({
        src: './src/template',
        dest: './lib/template',
      })
    ],
    watch: !isProd && {
      onRebuild(error) {
        if (error) {
          console.log(chalk.red.bold(`🟥 Watch Build Failed`))
        } else {
          console.log(chalk.blue.bold(`🟦 Watch Build Succeeded`))
        }
      },
    },
  })
  console.log(chalk.green.bold('🟩 Success Build \r\n'))
}
build()
