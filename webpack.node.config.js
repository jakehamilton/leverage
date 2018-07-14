// @ts-check
const path = require('path');

// @ts-ignore
const DTSBundlePlugin = require('dts-bundle-webpack');

// @ts-ignore
const pkg = require('./package.json');

module.exports = {
    target: 'node',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lib.js',
    },
    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.json',
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new DTSBundlePlugin({
            name: pkg.name,
            main: 'dist/types/index.d.ts',
            out: 'lib.d.ts',
            baseDir: 'dist',
            removeSource: true,
        }),
    ],
};
