let n = 5;
let index;
let coluna;
let linha = '';
let simbolo = '*';

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (index = 0; index <= meio; index += 1) {
  for (coluna = 1; coluna <= n; coluna += 1) {
    if (coluna > direita && coluna < esquerda) {
      linha = linha + simbolo;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita -= 1;
  esquerda += 1;
}