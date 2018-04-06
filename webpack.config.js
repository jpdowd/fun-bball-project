const webpack = require('webpack');
const path = require('path');
const package = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: './src/scripts/app.js',
        vendor: Object.keys(package.dependencies)
    },
    output: {
        filename: './[name].bundle.js'
    },
    node: {
        fs: "empty",
        module: "empty"
    },
    plugins:[
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Baseball Project',
            pageHeader: 'My Baseball Project',
            template: './src/main/webapp/index.html',
            filename: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.(s*0)css$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    watch: true, 
    resolve: {extensions: [".js", ".ts"]},
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 2700
    }
};

module.exports = config;