let n = 5;
let index;
let coluna;
let simbolo = '*';
let linha = '';
let pos = n;

for (index = 0; index < n; index += 1){
  for (coluna = 0; coluna <= n; coluna += 1) {
    if (coluna < pos) {
      linha += ' ';
    } else {
      linha += simbolo;
    }
  }
  console.log(linha);
  linha = '';
  pos -= 1;
}