module.exports = {
    extends: '@nuxt',
    rules: {
        'vue/no-v-html': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 'off',
        semi: ['error', 'always'],
        // quotes: ["error", "double"],
        indent: ['error', 4],
        'vue/require-prop-types': 'off',
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
        'vue/attribute-hyphenation': ['off'],
        'vue/html-self-closing': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-unused-expressions': ['off'],
        '@typescript-eslint/no-unnecessary-condition': ['off'],
        '@typescript-eslint/consistent-type-definitions': 'off',
    },
};
