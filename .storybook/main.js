const custom = require('../webpack.config.js');

module.exports = {
  stories: ['../packages/**/*.stories.(js|mdx)'],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
