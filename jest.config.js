module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': `${__dirname}/mock-module.js`,
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
  },
  testPathIgnorePatterns: ['/node_modules', '/src/environments/'],
  collectCoverageFrom: [
    '**/src/app/**/*.{ts,js}',
    '!**/*.mock.ts',
    '!**/*.mocked.ts',
    '!**/index.ts',
  ],
  setupFiles: ['./setup-jest.js', 'core-js'],
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'cobertura'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  globals: {
    'ts-jest': {
      isolatedModules: false,
    },
  },
};
