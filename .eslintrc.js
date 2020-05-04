const path = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  // parser: '@typescript-eslint/parser',
  plugins: ['jest', 'promise', 'react-hooks', 'import', 'react', 'prettier'],
  extends: [
    'eslint:recommended',

    'plugin:promise/recommended',

    'plugin:jest/recommended',

    'plugin:react/recommended',

    'plugin:import/errors',
    'plugin:import/warnings',

    'prettier',
    'prettier/react',

    //'plugin:@typescript-eslint/recommended',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    curly: ['error', 'all'],
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-mixed-operators': 'off',
    'no-unused-vars': 'warn',

    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'warn',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
