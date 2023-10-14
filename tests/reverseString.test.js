const reverseString = require('../code/reverseString');

test('Reverses single word sentences', () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test('Returns "" with an empty string', () => {
    expect(reverseString("")).toBe("");
  });

  test('Reverses multiple word sentences', () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test('Mantains capitalizations', () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
  });
  