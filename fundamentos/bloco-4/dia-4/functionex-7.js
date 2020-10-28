function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split("");
  fimPalavra = fimPalavra.split("");
  controle = true;
  for (let i = 0; i < fimPalavra.length; i++) {
    if (palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
      controle = false;
    }
  }
  return controle;
}
console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));