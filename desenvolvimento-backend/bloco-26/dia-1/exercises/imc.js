const readline = require('readline-sync');

const PESO_INICIAL = readline.questionInt('Qual seu peso?');
const ALTURA_INICIAL = readline.questionFloat('Qual sua altura?');

const calculaImc = () => {
  const peso = PESO_INICIAL;
  const altura = ALTURA_INICIAL;
  const imc = (peso / (altura * altura)).toFixed(2);

  console.log(`Peso: ${peso}, altura: ${altura}`);

  if (imc < 18.5) {
    console.log(`IMC: ${imc}. Abaixo do peso (magreza)`);
  } else if (imc < 24.9) {
    console.log(`IMC: ${imc}. Peso normal`);
  } else if (imc < 29.9) {
    console.log(`IMC: ${imc}. Acima do peso (sobrepeso)`);
  } else if (imc < 34.9) {
    console.log(`IMC: ${imc}. Obedidade grau I`);
  } else if (imc < 39.9) {
    console.log(`IMC: ${imc}. Obesidade grau II`);
  } else {
    console.log(`IMC: ${imc}. Obesidade graus III e IV`);
  }
};

calculaImc();