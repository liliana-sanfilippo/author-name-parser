import * as path from 'path';
import webpack, { Configuration } from 'webpack';
import { LicenseWebpackPlugin } from 'license-webpack-plugin';
const LicensePlugin: any = LicenseWebpackPlugin;
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



let type: 'umd' | 'commonjs' = 'umd';
let subdir = 'umd';
if (process.env.LIB_TYPE === 'commonjs') {
    type = 'commonjs';
    subdir = 'cjs';
}

const config: Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    target: 'web',
    output: {
        filename: 'author-name-parser.js',
        path: path.resolve(__dirname, 'dist', subdir),
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
    plugins: [
        new LicensePlugin({
            perChunkOutput: false,
            outputFilename: '3rdpartylicenses.txt',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
        }),

    ],
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            fs: false,
            assert: require.resolve('assert/'),
            buffer: require.resolve('buffer/'),
            process: require.resolve('process/browser'),
        },
    },
};


export default config;