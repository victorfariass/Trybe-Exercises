let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (pos=0; pos < numbers.length; pos++) {
  if (numbers[pos] < menor) {
    menor = numbers[pos];
  }
}
console.log(menor);