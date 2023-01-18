const path = require('path')
const nodeExternals = require('webpack-node-externals')
const mode = process.env.NODE_ENV || "development"
const devMode = mode === "development"
const SERVER_PATH = devMode ?
    ["@babel/polyfill", path.resolve(__dirname, 'src', 'server', "server.dev.js")] :
    ["@babel/polyfill", path.resolve(__dirname, 'src', 'server', "server.prod.js")]

module.exports = {

    entry: {
        server: SERVER_PATH,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'server.js'
    },
    target: 'node',
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
        rules: [
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
        ]
    }
}