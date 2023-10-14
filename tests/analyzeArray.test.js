const analyzeArray = require('../code/analyzeArray');

test('Analyzes array with two elements', () => {
    expect(analyzeArray([4,11])).toEqual({
        average: 7.5,
        min: 4,
        max: 11,
        length: 2
      });
  });

test('Analyzes longer array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
  });

  test('Analyzes one element array', () => {
    expect(analyzeArray([6])).toEqual({
        average: 6,
        min: 6,
        max: 6,
        length: 1
      });
  });

  test('Throws an error when the array is empty', () => {
    expect(() => {
      analyzeArray([]);
    }).toThrow(Error);
  });