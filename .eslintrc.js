module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'react-app',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'off',
    'import/named': 'off',
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
    'react/jsx-no-bind': 'off',
    'react/jsx-indent': [2, 2, { checkAttributes: true, indentLogicalExpressions: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
