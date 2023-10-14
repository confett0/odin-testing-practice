const capitalize = require('../code/capitalize');

test('Capitalizes single word sentences', () => {
  expect(capitalize("hello")).toBe("Hello");
});