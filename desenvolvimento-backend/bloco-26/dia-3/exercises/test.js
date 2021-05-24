const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const verificaNumero = require('./verificaNumero');

describe('Quando o valor passado não é um número', () => {
  it('É uma string', () => {
    const resposta = verificaNumero('Eu sou Tryber');

    expect(resposta).to.be.a('string');
  });

  it('Retorno esperado "O valor deve ser um número"', () => {
    const resposta = verificaNumero('Eu sou Tryber');

    expect(resposta).to.be.equals('O valor deve ser um número')
  })
});

describe('Quando o número for maior que "0"', () => {
  it('Retorna "Positivo"', () => {
    const resposta = verificaNumero(4);

    expect(resposta).to.be.equals('Positivo');
  });
});

describe('Quando o número for menor que "0"', () => {
  it('Retorna "Negativo"', () => {
    const resposta = verificaNumero(-4);

    expect(resposta).to.be.equals('Negativo');
  });
});

describe('Quando o número for igual a "0"', () => {
  it('Retorna "Neutro"', () => {
    const resposta = verificaNumero(0);

    expect(resposta).to.be.equals('Neutro');
  });
});

const escreveArquivo = require('./escreveArquivo');

describe('Executa função "escreveArquivo"', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  
  describe('A resposta', () => {
    it('É uma string', () => {
      const resposta = escreveArquivo('arquivo.txt', 'Eu sou Tryber!!!');

      expect(resposta).to.be.a('string');
    });

    it('Retorna "Ok"', () => {
      const resposta = escreveArquivo('arquivo.txt', 'Eu sou Tryber!!!');

      expect(resposta).to.be.equals('Ok');
    });
  });
});
