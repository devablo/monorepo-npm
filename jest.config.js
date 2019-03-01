module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      'packages/**/*.{js}',
      '!**/node_modules/**',
    ],
    testPathIgnorePatterns: [
      'packages/node-template',
      'packages/node-ts-template'
    ],
    testURL: "http://localhost/"
};