const path = require('path');
const webpack = require('webpack'); // to access built-in plugins
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](jquery)[\\/]/,
                    filename: 'vendors.bundle.js',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
    ],
};