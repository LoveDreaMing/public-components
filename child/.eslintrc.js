module.exports = {
    // 根目录指示
    root: true,
    // 环境配置
    env: {
        browser: true,
        node: true
    },
    // 继承的规则
    extends: [
        'plugin:vue/essential', // Vue.js相关的必要规则
        'eslint:recommended', // 推荐的ESLint规则
        'plugin:prettier/recommended' // Prettier插件的推荐配置
    ],
    // 解析选项
    parserOptions: {
        parser: '@babel/eslint-parser', // 使用Babel解析器
        requireConfigFile: false // 是否需要配置文件
    },
    // 规则配置
    rules: {
        'no-console': // 禁止console
            process.env.NODE_ENV === 'production'
                ? ['warn', { allow: ['warn', 'error'] }] // 生产环境下，允许警告和报错
                : 'off', // 非生产环境下关闭
        'no-debugger': // 禁止debugger
            process.env.NODE_ENV === 'production'
                ? 'warn' // 生产环境下，允许警告
                : 'off', // 非生产环境下关闭
        'vue/multi-word-component-names': 'off', // Vue组件名使用多个单词时关闭警告
        camelcase: 'off', // 关闭强制驼峰命名
        'no-lonely-if': 'off', // 关闭孤立的if语句的警告
        'no-new': 'off' // 关闭直接使用new操作符创建实例的警告
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
