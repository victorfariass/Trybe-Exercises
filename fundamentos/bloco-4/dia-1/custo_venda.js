let custo = 15;
let venda = 20;
let custoCompras = custo*1000;
let imposto = custoCompras*20/100;
let custoTotal = custoCompras - imposto;
let vendaTotal = venda*1000;
let lucro = vendaTotal - custoTotal;

if (custo < 0 || venda < 0) {
  console.error("Números inválidos")
}
else {
  console.log(lucro)
}

