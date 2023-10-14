const capitalize = require('../code/capitalize');

test('Capitalizes single word sentences', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test('Handles all capital words', () => {
    expect(capitalize("BEAR")).toBe("Bear");
  });

test('Handles multiple word strings', () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });