const path = require('path');
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const tsImportPluginFactory = require('ts-import-plugin');
const importPlugin = tsImportPluginFactory([]);

module.exports = {
    mode,
    entry: './src/index.ts',
    target: 'web',
    output: {
        filename: '[name].dist.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    //devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    externals: {
        moment: 'moment',
        jQuery: 'jQuery',
        angular: 'angular',
        underscore: "_",
        kendo: "kendo-ui",
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        // splitChunks: { 
        //     chunks: 'all',
        // },
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        reduce_funcs: false,
                        inline: false,
                    },
                },
                include: /\.min\.js$/,
            }),
        ]
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'ts-loader',
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [ importPlugin ]
                    })
                }
            }
        ],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};