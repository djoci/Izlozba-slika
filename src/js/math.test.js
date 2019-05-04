const proveriIme = require('./math')
describe('proveriIme', () => {
  it('ime should match with /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/', () => {
    expect(true).toBeTruthy();
  });

  test('/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/.test(ime)', () => {
    expect('Zorica').toMatch(/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/);
  });

  test('/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/.test(ime)', () => {
    expect('1234').toMatch(/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/);
  });

});

describe(`if ime matches with /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/`, () => {
  
  test('$( "#forIme" ).removeClass( "vidi-poruku" )', () => {
    expect(true).toBeTruthy();
  });

  test('$( "#forIme" ).addClass( "vidi-poruku" )', () => {
    expect(false).toBeTruthy();
  });

});



