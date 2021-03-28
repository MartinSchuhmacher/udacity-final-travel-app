const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//necessary syntax due to documentation for CleanWebpackPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//add Workbox for working with service workers
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WorkboxPlugin.GenerateSW()
    ],
    //providing proxy for communcation during dev mode with backend server on 8081
    devServer: {
        open: true,
        proxy: {
            '/location': 'http://localhost:8081',
            '/weather': 'http://localhost:8081',
            '/picture': 'http://localhost:8081',
            '/all': 'http://localhost:8081'
        }
    }
}