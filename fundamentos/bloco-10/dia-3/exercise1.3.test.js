const { TestScheduler } = require('jest');
const exercise1 = require('./exercise1');

describe('Testando omplementações exercício 3', () => {
  test('Teste para receber 3 parâmetros e receber sua multiplicação', () => {
    exercise1.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(exercise1.randomNumber(2, 5, 2)).toBe(20);
    expect(exercise1.randomNumber).toHaveBeenCalled();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise1.randomNumber).toHaveBeenCalledWith(2, 5, 2)
  })

  test('Teste para receber 1 parâmetro e retorna o dobro', () => {
    exercise1.randomNumber.mockReset();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(0);

    exercise1.randomNumber.mockImplementation(a => a * 2);

    expect(exercise1.randomNumber(5)).toBe(10);
    expect(exercise1.randomNumber).toHaveBeenCalled();
    expect(exercise1.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise1.randomNumber).toHaveBeenCalledWith(5);
  })
})
