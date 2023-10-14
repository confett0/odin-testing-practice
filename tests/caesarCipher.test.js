const caesarCipher = require('../code/caesarCipher');

test('Capitalizes single word sentences', () => {
    expect(caesarCipher("hello",2)).toBe("jgnnq");
  });