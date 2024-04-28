const isProduction = process.env.NODE_ENV === 'production';
// const getSyncEntries = require('./src/utils/getSyncEntries'); // 同步读取组件入口
const getAsyncEntries = require('./src/utils/getAsyncEntries'); // 异步读取组件入口
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',
    // entry: isProduction ? getSyncEntries() : './examples/main.js',
    entry: isProduction ? () => getAsyncEntries() : './examples/main.js',
    // entry: isProduction ? './packages/main.js' : './examples/main.js',
    output: {
        filename: `lib.[name].js`,
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: '[name]',
            type: 'umd'
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            // 处理css文件
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env']
                            }
                        }
                    }
                ]
            },
            // 处理scss文件
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env']
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            // 处理js文件
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            // 处理vue文件
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            minify: false
        }),
        new VueLoaderPlugin(),
        new ESLintPlugin({
            extensions: ['js', 'vue']
        })
    ].concat(isProduction ? [new CleanWebpackPlugin()] : []),
    externals: {
        vue: 'Vue'
    }
};

module.exports = config;
