const sum = require('./sum');

describe('Exercício 1', () => {
  it('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(5).toEqual(sum(2, 3));
  })
  it('O retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4, 5));
  })
  it('O retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(sum(0, 0));
  })
})