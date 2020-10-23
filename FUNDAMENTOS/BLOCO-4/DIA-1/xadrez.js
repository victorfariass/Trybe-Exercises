let peca = "bispo";
peca = peca.toLowerCase();

if (peca == "rei") {
  console.log("Qualquer direção, uma casa por vez");
}
else if (peca == "dama") {
  console.log("Qualquer direção, quantas casas quiser");
}
else if (peca == "torre") {
  console.log("Linha reta");
}
else if (peca == "bispo") {
  console.log("Diagonal");
}
else if (peca == "cavalo") {
  console.log("Move-se em 'L'");
}
else if (peca == "peão") {
  console.log("Casa da frente");
}
else {
  console.log("ERRO. Peça inválida")
}