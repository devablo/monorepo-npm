const packageB = require('./');

test('returns correct string', () => {
  expect(packageB).toBe('This is from package-b! TEST');
});