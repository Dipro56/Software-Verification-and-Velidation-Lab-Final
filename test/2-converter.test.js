const converterModuels = require('../src/2-converter');

describe('LengthConverter', () => {
  var BVAData = [
    ['feets', 3, ['36.00 inches', '0.00 miles']],
    ['inches', 3, ['0.25 feets', '0.00 miles']],
    ['miles', 5.0, ['26400.00 feets', '316800.00 inches']],
    ['', 5.0, 'wrong input'],
  ];

  describe.each(BVAData)(
    'BVA: LengthConverter(%i, %i), Expected: %i',
    (a, b, expected) => {
      test(`returns ${converterModuels.LengthConverter(
        a,
        b,
        expected
      )}`, () => {
        expect(converterModuels.LengthConverter(a, b)).toEqual(expected);
      });
    }
  );
});
