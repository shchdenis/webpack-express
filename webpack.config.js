const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const mode = process.env.NODE_ENV || "development"
const devMode = mode === "development"
const target = devMode ? "web" : "browserslist"
const devtool = devMode ? "source-map" : undefined

const PATH = devMode ?
    ["@babel/polyfill", "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", "./src/main.js"] :
    ["@babel/polyfill", path.resolve(__dirname, 'src', "main.js")]

module.exports = {
    mode,
    target,
    devtool,
    // devServer: {
    //     port: 8080,
    //     open: true,
    //     hot: true
    // },
    // context: path.resolve(__dirname, "src"),

    entry: {
        main: PATH
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
        filename: '[name].js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
        rules: [
            { test: /\.html$/i, use: 'html-loader' },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                    ],
                                ],
                            },
                        },
                    },
                    'group-css-media-queries-loader',
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.woff2?$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i,
                use: devMode
                    ? []
                    : [
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    quality: [0.65, 0.9],
                                    speed: 4,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                webp: {
                                    quality: 75,
                                },
                            },
                        },
                    ],
                type: 'asset/resource',
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: "./index.html",
            excludeChunks: ['server']
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

};