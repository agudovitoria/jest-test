const BasicMathOperations = require('../src/BasicMathOperations');

test('it should return zero if not operands', () => {
  expect(BasicMathOperations.sum([])).toBe(0);
});

test('it should return zero if zero is passed as only operator', () => {
  expect(BasicMathOperations.sum([0])).toBe(0);
});

test('it should thrown an exception if some value is not a number', () => {
  expect(() => BasicMathOperations.sum([1, 'a'])).toThrow(Error);
});

test('it should return three when adds one and two', () => {
  expect(BasicMathOperations.sum([1, 2])).toBe(3);
});

test('it should return minus one when adds one and minus two', () => {
  expect(BasicMathOperations.sum([1, -2])).toBe(-1);
});