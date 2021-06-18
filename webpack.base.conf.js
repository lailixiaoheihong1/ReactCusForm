const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test:/\.svg/,
                use: ['svg-inline-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.ejs')
        }),
        // new CommonsChunkPlugin({
        //     name: 'common',
        //     chunks: ['index', 'Qrcode', 'QrcodeScanner', 'Util']
        //   }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'react-cus-form.css',
        }),
    ],
    optimization:{
        usedExports: false
    },
    externals:{
        React: "react",
        "ReactDOM": "react-dom",
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};
