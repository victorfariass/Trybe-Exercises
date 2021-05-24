const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular Velocidade Média', script: './velocidade.js' },
  { name: 'Jogo de Adivinhação', script: './sorteio.js' }
];

const mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`)
  .unshift('Escolha um número para executar o script correspondente')
  .join('\n');

const scriptNumber = readline.questionInt(mensagem) -1;

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.script);