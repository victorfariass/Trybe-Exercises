function verificaNumero(numero) {
  if (typeof numero !== 'number') {
    return 'O valor deve ser um número';
  } else if (numero > 0) {
    return 'Positivo';
  } else if (numero < 0) {
    return 'Negativo';
  } else {
    return 'Neutro';
  };
};

module.exports = verificaNumero;