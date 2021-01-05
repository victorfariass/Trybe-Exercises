test('string to uppercase', done => {
  uppercase('victor', (string) => {
    expext(string).toBe('VICTOR');
    done();
  })
});