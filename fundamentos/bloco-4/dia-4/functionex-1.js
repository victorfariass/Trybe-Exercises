function verificaPalindromo(palavra){
  let palavraInvertida = "";
  for (let letra = palavra.length -1; letra >= 0; letra -= 1){
    palavraInvertida += palavra[letra];
  }
  if (palavra === palavraInvertida){
    console.log("True");
  }
  else {
    console.log("False")
  }
}

verificaPalindromo("desenvolvimento")