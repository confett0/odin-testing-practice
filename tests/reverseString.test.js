const reverseString = require('../code/reverseString');

test('Reverses single word sentences', () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  