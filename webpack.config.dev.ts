// WebPack configuration for development
const path = require('path');
const glob = require("glob");
module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: glob.sync('./test/**/*.test.ts').map((file: string) => './' + file),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: false
        }
    },
    output: {
        filename: 'author-name-parser-dev.js',
        library: {
            name: 'AuthorNameParser',
            type: 'commonjs'
        },
        path: path.resolve(__dirname, 'dist/dev'),
    }
};