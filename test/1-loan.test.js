const loneModuels = require('../src/1-loan');

describe('calculateLoan', () => {
  var BVAData = [
    [1000, 0.1, 12, '83.42'],
    [-100, 0.1, 12, 'Please provide a valid loan amount'],
    [100, -0.1, 12, 'Please provide a valid interestRate'],
    [100, 0.5, 20, '5.03'],
    ['hello', 0.5, 20, 'Please provide a valid loan amount'],
    ['100', '0.5', 20, '5.03'],
    [1 / 0, '0.5', 20, 'Infinity'],
    [0, 0, 0, 'NaN'],
    [12, 2, 0, 'Infinity'],
    [12, 0, 0, 'NaN'],
    [NaN, 12, 0, 'Please provide a valid loan amount'],
    [100, 2000, true, '2100.00'],
    [true, true, true, '1.01'],
    [true, 100, true, '2.00'],
    ['100', 100, false, 'Infinity'],
    ['100', 100, true, '200.00'],
    ['', '', '', 'Please provide a valid loan amount'],
    [100, true, 800, '0.13'],
    [-2, 0.2, 10, 'Please provide a valid loan amount'],
    [true, true, -800, 'Please provide a valid month'],
    [122, 33, -800, 'Please provide a valid month'],
    [12, NaN, 10, 'Please provide a valid interestRate'],
    [12, 10, NaN, 'Please provide a valid month'],
    [12, '10', 100, '0.13'],
    [12, 10, '100', '0.13'],
    [true, 10, '100', '0.01'],
    [100, 'dasda', '100', 'Please provide a valid interestRate'],
    [100, '100', 0.5, '400.00'],
    ['10', '100', '0.5', '40.00'],
    ['hello', '100', '0.5', 'Please provide a valid loan amount'],
    [100, '', '', 'Please provide a valid interestRate'],
    [100, 200, '', 'Please provide a valid month'],
  ];

  describe.each(BVAData)(
    'BVA: calculateLoan(%i, %i, i%), Expected: %i',
    (a, b, c, expected) => {
      test(`returns ${loneModuels.calculateLoan(a, b, c, expected)}`, () => {
        expect(loneModuels.calculateLoan(a, b, c)).toBe(expected);
      });
    }
  );
});
