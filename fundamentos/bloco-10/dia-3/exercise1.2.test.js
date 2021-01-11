const exercise1 = require('./exercise1');

test('Testa se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
  exercise1.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(exercise1.randomNumber(10, 2)).toBe(5);
  expect(exercise1.randomNumber).toHaveBeenCalled();
  expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercise1.randomNumber).toHaveBeenCalledWith(10, 2);
})