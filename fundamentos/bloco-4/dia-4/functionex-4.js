function nomeMaior(nomes) {
  let maiorNome = nomes[0];
  for (let indice in nomes) {
    if (maiorNome.length < nomes[indice].length) {
      maiorNome = nomes[indice]
    }
  }
  return maiorNome;
}
console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));