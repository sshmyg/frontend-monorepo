module.exports = {
  clearMocks: true,
  verbose: false,

  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/test'],

  setupFilesAfterEnv: ['./jest.setup.js'],
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@root/(.*)$': '<rootDir>/src/$1/src',
  },

  notify: true,
  notifyMode: 'always',
};
