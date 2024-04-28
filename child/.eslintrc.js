module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false
    },
    rules: {
        'no-console':
            process.env.NODE_ENV === 'production'
                ? ['warn', { allow: ['warn', 'error'] }]
                : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        camelcase: 'off',
        'no-lonely-if': 'off',
        'no-new': 'off'
    },
    overrides: [
        {
            files: ['*.html'],
            rules: {
                'vue/comment-directive': 'off' // FIX:https://github.com/vuejs/eslint-plugin-vue/issues/1355
            }
        }
    ]
};
