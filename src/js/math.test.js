const checkdate = require('./math')
describe('checkdate', () => {
  it('Datum mesec i godina mogu da budu tekuci ili u buducnosti', () => {
    expect(true).toBeTruthy();
  });

test('Buduci datum', () => {
  expect(checkdate('8/2019')).toBe(true);
});

test('Datum u proslosti', () => {
  expect(checkdate('8/2011')).toBe(false);
});

test('Pogresan unos', () => {
  expect(checkdate('18/2011')).toBe(false);
});


});

