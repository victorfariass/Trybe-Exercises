const readline = require('readline-sync');

const distancia = readline.questionInt('Qual a distância percorrida? (m)');
const tempo = readline.questionInt('Qual o tempo percorrido? (s)');

const calculaVelocidadeMedia = () => {
  velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`A velocidade média é ${velocidadeMedia} m/s`);
};

calculaVelocidadeMedia();