const uppercase = require('./uppercase');

test('string to uppercase', done => {
  uppercase('victor', (string) => {
    expect(string).toBe('VICTOR');
    done();
  })
});