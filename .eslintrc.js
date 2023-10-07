module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    ignorePatterns: ['**/graphQLGeneratedCode.js'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/prop-types': 'off',
        'max-len': [2, 120, 4],
        'no-console': 'off',
        'prettier/prettier': ['error', { tabWidth: 4 }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent': ['error', 4],
        semi: ['error', 'always'],
        'react/jsx-pascal-case': ['error'],
        // ... (other rules)
    },
    settings: {
        react: {
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
        },
    },
};
