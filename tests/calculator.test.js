const calculator = require('../code/calculator');

test('Sums single digits numbers', () => {
    expect(calculator.sum(2,3)).toBe(5);
  });

test('Sums multiple digits numbers', () => {
    expect(calculator.sum(452,91)).toBe(543);
  });

test('Subtract single digits numbers', () => {
    expect(calculator.subtract(6,2)).toBe(4);
  });

test('Subtract multiple digits numbers', () => {
    expect(calculator.subtract(743,222)).toBe(521);
  });