module.exports = {
    // 根目录指示
    root: true,
    // 环境配置
    env: {
        browser: true, // 浏览器环境
        node: true // Node.js 环境
    },
    // 继承的规则
    extends: [
        'eslint:recommended', // 推荐的ESLint规则
        'plugin:@typescript-eslint/recommended', // TypeScript推荐规则
        'plugin:vue/essential', // Vue.js相关的必要规则
        'plugin:prettier/recommended' // Prettier插件的推荐配置
    ],
    // 解析选项
    parser: 'vue-eslint-parser', // 使用vue-eslint-parser解析器
    parserOptions: {
        parser: '@typescript-eslint/parser', // 使用@typescript-eslint/parser解析器
        ecmaVersion: 2021, // ECMAScript版本
        sourceType: 'module' // 模块类型
    },
    // 插件配置
    plugins: ['@typescript-eslint', 'vue'], // 使用的插件
    // 规则配置
    rules: {
        'no-console': // 禁止console
            process.env.NODE_ENV === 'production' // 生产环境下
                ? ['warn', { allow: ['warn', 'error'] }] // 警告，允许warn和error
                : 'off', // 非生产环境下关闭
        'no-debugger': // 禁止debugger
            process.env.NODE_ENV === 'production' // 生产环境下
                ? 'warn' // 警告
                : 'off', // 非生产环境下关闭
        'vue/multi-word-component-names': 'off', // Vue组件名使用多个单词时关闭警告
        camelcase: 'off', // 关闭强制驼峰命名
        'no-lonely-if': 'off', // 关闭孤立的if语句的警告
        'no-new': 'off', // 关闭直接使用new操作符创建实例的警告
        '@typescript-eslint/no-explicit-any': 'off', // 关闭显示any类型的警告
        '@typescript-eslint/no-this-alias': 'off' // 关闭使用this别名的警告
    },
    // 文件覆盖规则
    overrides: [
        {
            files: ['*.html'], // 匹配HTML文件
            rules: {
                'vue/comment-directive': 'off' // 关闭Vue指令注释的警告
            }
        }
    ]
};
