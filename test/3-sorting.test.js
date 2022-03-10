const sortModules = require('../src/3-sorting.js');

describe('insertionSort', () => {
  var BVAData = [
    [
      [2, 1, 4, 3],
      [1, 2, 3, 4],
    ],
    [
      [4, 2, 4, 3, 3, 4, 5, 1],
      [1, 2, 3, 3, 4, 4, 4, 5],
    ],
    [
      [-1, 100, -20, 4, 5],
      [-20, -1, 4, 5, 100],
    ],
    [[-100], [-100]],
    [[], []],
    [
      ['hello', 'hell'],
      ['hell', 'hello'],
    ],
    [
      [2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2],
    ],
    // [
    //   [5, 1, 'yes', 1 / 0, 500, null],
    //   [5, 1, 'yes', null, 500, Infinity],
    // ],
  ];

  describe.each(BVAData)(
    'BVA: insertionSort(%i), Expected: %i',
    (a, expected) => {
      test(`returns ${sortModules.insertionSort(a, expected)}`, () => {
        expect(sortModules.insertionSort(a)).toEqual(expected);
      });
    }
  );
});
