module.exports = {
  extends: ['../../.eslintrc.js'],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          app: './src',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
