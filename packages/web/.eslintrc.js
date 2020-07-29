module.exports = {
  extends: ['../../.eslintrc.js'],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
