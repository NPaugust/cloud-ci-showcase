/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/tests/**/*.test.js'],
  verbose: true,
};

