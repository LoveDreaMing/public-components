const { defineConfig } = require('@vue/cli-service');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = defineConfig({
    publicPath: isProduction ? './' : '/',
    productionSourceMap: false,
    transpileDependencies: true,
    devServer: {
        port: 9090
    },
    configureWebpack: {
        externals: {
            vue: 'Vue'
        }
    }
});
