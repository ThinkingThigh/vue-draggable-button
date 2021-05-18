const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        },
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('packages'),
                'assets': resolve('examples/assets'),
                'views': resolve('examples/views'),
            }
        }, 
    },
    productionSourceMap: false,
    css: {
        extract: false,
    },
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    devServer:{
        port: 8091,
        hot: true,
        open: 'Google Chrome'
    }

}
