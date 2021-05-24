const readline = require('readline-sync');




const resultado = (sorteado, escolhido) => {
  if (sorteado === escolhido) {
    return console.log(`Parabéns, número correto!`)
  } 
  console.log(`Opa, não foi dessa vez. O número era ${sorteado}`)
}

const game = () => {
  const escolhido = readline.questionInt('Escolha um número entre 1 e 10:');
  const sorteado = Math.floor(Math.random() * (10 - 1)) + 1;

  resultado(sorteado, escolhido);

  const jogarNovamente = readline.question('Deseja jogar novamente? Digite "s" para sim e qualquer outra coisa para não.');

  if (jogarNovamente !== 's') {
    return console.log('OK, até a próxima!');
  }
  game()
}

game();