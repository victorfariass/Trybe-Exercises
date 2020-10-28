let n = 10;
let pos;
let simbolo = '*';
let linha = '';

for (pos = 0; pos < n; pos += 1){
  linha += simbolo;
}
for (pos = 0; pos < n; pos += 1){
  console.log(linha);
}