const exercise1 = require('./exercise1');

test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  exercise1.randomNumber = jest.fn().mockReturnValue(10);

  expect(exercise1.randomNumber()).toBe(10);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
})