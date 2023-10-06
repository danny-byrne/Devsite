module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: ['**/graphQLGeneratedCode.tsx'],
  globals: {
    JSX: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'max-len': [2, 120, 4],
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 4,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-indent': ['error', 4],
    'react/prop-types': [
      2,
      {
        ignore: ['history'],
      },
    ],
    semi: ['error', 'always'],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-closing-tag-location': 1,
    'jsx-quotes': ['error'],
    'no-multi-spaces': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'react/jsx-curly-spacing': ['error'],
    'react/jsx-boolean-value': ['error'],
    'react/jsx-wrap-multilines': ['error'],
    'react/self-closing-comp': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-array-index-key': ['error'],
    'react/no-string-refs': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-unused-vars': 'off',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      // Regex for Component Factory to use, default to "createReactClass".
      pragma: 'React',
      // Pragma to use, default to "React".
      fragment: 'Fragment',
      // Fragment to use (may be a property of <pragma>), default to "Fragment".
      version: 'detect',
      flowVersion: '0.53', // Flow version.
    },

    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`.
      // If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      {
        property: 'freeze',
        object: 'Object',
      },
      {
        property: 'myFavoriteWrapper',
      },
      // for rules that check exact prop wrappers
      {
        property: 'forbidExtraProps',
        exact: true,
      },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function.
      // If this isn't set, components wrapped by these functions will be skipped.
      'observer',
      // `property`
      {
        property: 'styled',
      },
      // `object` is optional
      {
        property: 'observer',
        object: 'Mobx',
      },
      {
        property: 'observer',
        object: '<pragma>',
      }, // sets `object` to whatever value `settings.react.pragma` is set to
    ],

    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />.
      'CustomForm',
      {
        name: 'Form',
        formAttribute: 'endpoint',
      },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />.
      'Hyperlink',
      {
        name: 'Link',
        linkAttribute: 'to',
      },
    ],
  },
};
