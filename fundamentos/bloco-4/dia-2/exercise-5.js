let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (pos=0; pos < numbers.length; pos++) {
  if (numbers[pos] > maior) {
    maior = numbers[pos]
  }
}
console.log(maior)