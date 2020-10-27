let salario = 3000;

let inss = 0;
let ir = 0;
let parcela = 0;

if (salario <= 1556.94) {
  inss = salario* (8/100);
}
else if (salario <= 2594.92) {
  inss =  salario* (9/100);
}
else if (salario <= 5189.82) {
  inss = salario* (11/100);
}
else {
  inss = 570.88;
}

let salarioBase = salario - inss;

if (salarioBase < 1903.98) {
  ir = 0
}
else if (salarioBase <= 2826.65) {
  ir = salarioBase* (7.5/100);
  parcela = 142.80;
}
else if (salarioBase <= 3751.05) {
  ir = salarioBase* (15/100);
  parcela = 354.80;
}
else if (salarioBase <= 4664.68) {
  ir = salarioBase* (22.5/100);
  parcela = 636.13;
}
else {
  ir = salarioBase* (27.5/100);
  parcela = 869.36;
}

console.log(`Seu salario bruto é R$${salario}.`)
console.log(`O valor descontado do INSS é de R$${inss}.`)
console.log(`O valor descontado da IR é de R$${ir}.`)
console.log(`Será deduzido do imposto de renda o valor R$${parcela}.`)
console.log(`Seu salaŕio será de R$${salarioBase - (ir - parcela)}.`)
