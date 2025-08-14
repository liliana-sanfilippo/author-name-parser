const path = require("path");
const LicensePlugin = require('webpack-license-plugin')


let type = 'umd';
let dir = 'dist';
if (process.env.LIB_TYPE) {
    type = process.env.LIB_TYPE;
    if (type === 'umd') {
        dir = 'dist/umd';
    } else if (type === 'commonjs') {
        dir = 'dist/cjs';
    }
}

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'web',
    output: {
        filename: 'author-name-parser.js',
        path: path.resolve(__dirname, dir),
        library: {
            name: 'AuthorNameParser',
            type: type,
        },
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
            fs: false
        },
    },
    plugins: [
        new LicensePlugin()
    ]
};

