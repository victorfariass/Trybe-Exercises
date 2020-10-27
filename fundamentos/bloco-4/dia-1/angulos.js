let num1 = 60;
let num2 = 60;
let num3 = 60;

let resultado = num1 + num2 + num3;

if (typeof resultado !== "number") {
  console.error("Número inválido");
}
else if (resultado === 180) {
  console.log("True");
}
else {
  console.log("False");
}

