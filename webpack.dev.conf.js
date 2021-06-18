const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        index: './src/app.js',
        // Util: './src/Util.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        // libraryTarget: 'commonjs2'
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 3001
    }
});