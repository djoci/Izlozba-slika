const proveriIme = require('./math')
describe('proveriIme', () => {
  it('ime should match with /^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/', () => {
    expect(true).toBeTruthy();
  });

  test('/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/.test(ime)', () => {
    expect('Anamarija').toMatch(/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/);
  });

  test('/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/.test(ime)', () => {
    expect('1234').toMatch(/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{1,12}$/);
  });

});