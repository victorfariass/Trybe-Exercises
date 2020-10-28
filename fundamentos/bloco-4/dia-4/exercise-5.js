let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Collor Commics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

let key = 0
for (let key in info){
  if (info[key] === info.recorrente && info[key] === "Sim" && info2[key] === "Sim"){
    console.log("Ambos recorrentes")
  } else {
    console.log(info[key] + ' e ' + info[key])
  }
}
