const packageA = require('./');

test('returns correct string', () => {
  expect(packageA).toBe('This is from package-a! TEST');
});