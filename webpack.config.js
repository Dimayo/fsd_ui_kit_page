const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        uipage: './src/uipage.js',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    output: {
        path: path.resolve(__dirname, 'docs/'),
        filename: '[name].js',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader",
                    }, {
                        loader: MiniCssExtractPlugin.loader,
                    },

                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: "sass-loader",
                    },
                ]

            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                exclude: /fonts/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name].[ext]',
                    },
                }, ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyWebpackPlugin([{
                from: './src/fonts',
                to: './fonts'
            },
            {
                from: './src/video',
                to: './video'
            }
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html',
            inject: true,
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/uipage.pug',
            filename: 'uipage.html',
            inject: true,
            chunks: ['uipage']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ]
};