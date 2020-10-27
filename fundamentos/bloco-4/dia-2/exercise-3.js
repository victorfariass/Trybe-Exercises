let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (pos=0; pos < numbers.length; pos++){
  soma += numbers[pos];
}
console.log(soma/numbers.length)