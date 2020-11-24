const longestWord = (texto) => {
  let frase = texto.split(' ');
  let maxLength = 0;
  let result = '';

  for (const palavra of frase) {
    if (palavra.length > maxLength) {
      maxLength = palavra.length;
      result = palavra;
    }
  }
  return result
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))