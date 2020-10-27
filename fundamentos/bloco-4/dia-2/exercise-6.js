let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = []
for (pos=0; pos < numbers.length; pos++) {
  if (numbers[pos] % 2 ==! 0) {
    impar.push(numbers[pos])
  }
}
if (impar.length > 0) {
  console.log(impar.length)
} else {
  console.log("Nenhum valor ímpar encontrado")
}