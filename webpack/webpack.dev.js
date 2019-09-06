const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: path.resolve('./src'),
        port: '3001',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                exclude: /node-modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[hash]-[name].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[hash]-[name].[ext]'
                    }
                }
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
            minimize: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve("./src/index.html"),
            filename: "./index.html"
        }),
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            '$': 'jquery',
        })
    ]
});