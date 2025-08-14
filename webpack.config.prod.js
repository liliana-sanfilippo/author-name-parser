const path = require("path");
const webpack = require("webpack")
const LicensePlugin = require('webpack-license-plugin')


let type = 'umd';
let dir = 'dist/umd';

if (typeof process !== 'undefined' && process.env?.LIB_TYPE) {
    type = process.env.LIB_TYPE;
    if (type === 'umd') {
        dir = 'dist/umd';
    } else if (type === 'commonjs') {
        dir = 'dist/cjs';
    } else if (type === 'module') {
        dir = 'dist/module';
    }
}

const config = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'web',
    output: {
        filename: 'author-name-parser.js',
        path: path.resolve(__dirname, dir),
        library: type === 'module'
            ? { type: 'module' }
            : { name: 'AuthorNameParser', type: type },
        environment: {
            arrowFunction: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { targets: 'defaults' }]],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: false,
            process: require.resolve("process/browser")
        },
    },
    plugins: [
        new LicensePlugin(),
        new webpack.DefinePlugin({
            "process.env.LIB_TYPE": JSON.stringify(process.env.LIB_TYPE || "umd"),
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser', // mockt process im Browser
        })
    ]
};

if (type === 'module') {
    config.experiments = { outputModule: true };
}

module.exports = config;
