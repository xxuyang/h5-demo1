'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        open: true,
        hot: true,
        port: 7777,
        // before: require('./mock/mock-server.js'),
        proxy: {
            '/dev-api': {
                // target: 'http://172.18.0.2:5769',//服务器上用这个
                target: 'http://10.10.118.2:5769',//本地调试用：服务器
                // target: "http://10.1.72.28:5769",//本地调试：后端浩然IP
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/dev-api': '/'
                },
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: "H5-DEMO1",
        devtool: 'source-map',
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                modifyVars: {
                    // 直接覆盖变量
                    // 'text-color': '#111',
                    // 'border-color': '#eee',
                    // 'green': '#ff9800',
                    // 'button-primary-background-color': '#000',
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    hack: `true; @import "${path.join(
                        __dirname,
                        './src/assets/css/resetVant.less'
                    )}";`,
                },
            },
        },
    },
}