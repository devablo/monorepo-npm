jest.unmock('@devablo/package-a');
jest.unmock('@devablo/package-b');
const log = jest.fn();
console.log = log;
const packageEx = require('./packages/package-example');
test('outputs correct string', () => {
  expect(log.mock.calls.length).toBe(3);
  expect(log.mock.calls[0][0]).toBe('This is the app example and TEST');
  expect(log.mock.calls[1][0]).toBe('This is from package-a! TEST');
  expect(log.mock.calls[2][0]).toBe('This is from package-b! TEST');
});