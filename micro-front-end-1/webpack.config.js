const WebpackHtmlPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devServer: {
        port:8081,
    },
    plugins: [
        new WebpackHtmlPlugin({
            template: './public/index.html'
        })
    ]
};

