const exercise4 = require('./exercise4');
jest.mock('./exercise4');

describe('Testa implementações do exercicio 4', () => {
  test('Testa se a primeira função vai retornar em caixa baixa', () => {
    exercise4.function1.mockImplementation(a => a.toLowerCase());

    expect(exercise4.function1('VICTOR')).toBe('victor');
    expect(exercise4.function1).toHaveBeenCalled();
    expect(exercise4.function1).toHaveBeenCalledTimes(1);
    expect(exercise4.function1).toHaveBeenCalledWith('VICTOR');
  })

  test('Testa se a segunda função vai retornar a última letra', () => {
    exercise4.function2.mockImplementation(a => a.charAt(a.length - 1));

    expect(exercise4.function2('Victor')).toBe('r');
    expect(exercise4.function2).toHaveBeenCalled();
    expect(exercise4.function2).toHaveBeenCalledTimes(1);
    expect(exercise4.function2).toHaveBeenCalledWith('Victor');
  })

  test('Testa se a terceira função irá concatenar três strings', () => {
    exercise4.function3.mockImplementation((a, b, c) => a.concat(b, c));

    expect(exercise4.function3('Victor', 'Nunes', 'Farias')).toBe('VictorNunesFarias');
    expect(exercise4.function3).toHaveBeenCalled();
    expect(exercise4.function3).toHaveBeenCalledTimes(1);
    expect(exercise4.function3).toHaveBeenCalledWith('Victor', 'Nunes', 'Farias');
  })
})