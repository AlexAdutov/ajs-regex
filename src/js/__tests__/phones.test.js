import phonesCorrection from '../phones';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['+4720 000 000 0000', '+47200000000000'],
])('regexp', (obj, expected) => {
  const result = phonesCorrection(obj);
  expect(result).toBe(expected);
});
