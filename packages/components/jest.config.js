const baseConfig = require('../../jest.config');

const packageName = require('./package.json').name.split('@root/').pop();

module.exports = {
  ...baseConfig,

  roots: [`<rootDir>/packages/${packageName}`],
  modulePaths: [`<rootDir>/packages/${packageName}/src/`],

  name: packageName,
  displayName: packageName,
  rootDir: '../..',
};
