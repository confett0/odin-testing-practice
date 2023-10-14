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

  test('Works when the second number is larger than the first', () => {
    expect(calculator.subtract(8,14)).toBe(-6);
  });

  test('Multiplies single digits numbers', () => {
    expect(calculator.multiply(4,3)).toBe(12);
  });

test('Multiplies multiple digits numbers', () => {
    expect(calculator.multiply(12,9)).toBe(108);
  });

test('Returns 0 when one number is zero', () => {
    expect(calculator.multiply(734,0)).toBe(0);
  });

  test('Divides single digits numbers', () => {
    expect(calculator.divide(4,2)).toBe(2);
  });

test('Divides multiple digits numbers', () => {
    expect(calculator.divide(345,11)).toBeCloseTo(31.36);
  });

test('Throws an error when trying to divide by zero', () => {
    expect(calculator.divide(42,0)).toThrow(Error);
  });