const caesarCipher = require('../code/caesarCipher');

test('Shifts a single word', () => {
    expect(caesarCipher("hello",2)).toBe("jgnnq");
  });

test('Shifts multiple word strings', () => {
    expect(caesarCipher("hello hello",5)).toBe("mjqqt mjqqt");
  });

  test('Wraps around the alphabet', () => {
    expect(caesarCipher("hello world",14)).toBe("vszzc kcfzr");
  });

  test('Mantains capitalization', () => {
    expect(caesarCipher("Hello World",8)).toBe("Pmttw Ewztl");
  });

  test('Mantains punctuation', () => {
    expect(caesarCipher("If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.",7)).toBe("Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.");
  });