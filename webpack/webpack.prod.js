const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
    entry: {
        'css-dnd': path.resolve('./src/js/app.js'),
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
            chunkFilename: '[chunk][name].min.css'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
});