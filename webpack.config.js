const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/main/webapp/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 2700,
        open: true,
        watchContentBase: true
    }
};

module.exports = config;