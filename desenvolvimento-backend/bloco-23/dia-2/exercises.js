// 1. Exercício 1: Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.
db.superheroes.findOne();

// 2. Exercício 2: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.
db.superheroes.find({ "aspects.height": { $lt: 180 } }).pretty();

// 3. Exercício 3: Retorne o total de super-heróis menores que 1.80m.
db.superheroes.count({ "aspects.height": { $lt: 180 } });

// 4. Exercício 4: Retorne o total de super-heróis com até 1.80m.
db.superheroes.count({ "aspects.height": { $lte: 180 } });

// 5. Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });

// 6. Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
db.superheroes.count({ "aspects.height": { $gte: 200 } });

// 7. Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
db.superheroes.find({ "aspects.eyeColor": "green" }).pretty();

// 8. Exercício 8: Retorne o total de super-heróis com olhos azuis.
db.superheroes.count({ "aspects.eyeColor": "blue" });

// 9. Exercício 9: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.find({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } }).pretty();

// 10. Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.count({ "aspects.hairColor": { $in: [ "Black", "No Hair" ] } });

// 11. Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
db.superheroes.count({ "aspects.hairColor": { $nin: [ "Black", "No Hair" ] } });

// 12. Exercício 12: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
db.superheroes.count({ "aspects.height": { $not: { $gt: 180 } } });

// 13. Exercício 13: Selecione todos os super-heróis que não sejam humanos ou que não sejam maiores do que 1.80m .
db.superheroes.find({ $nor: [{ race: "Human" }, { "aspects.height": { $gt: 180 } }] }).pretty();

// 14. Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .
db.superheroes.find(
  {
    $and: [
      { "aspects.height": { $in: [180, 200] } },
      { publisher: "Marvel Comics" }
    ]
  }
).pretty();

// 15. Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .
db.superheroes.find(
  {
    $and: [
      { "aspects.weight": { $gte: 80, $lte: 100 } },
      { race: { $in: ["Human", "Mutant"] } },
      { publisher: { $ne: "DC Comics"} }
    ]
  }
).pretty();

// 16. Exercício 16: Retorne o total de documentos que não contêm o campo race .
db.superheroes.count({ race: { $exists: false } });

// 17. Exercício 17: Retorne o total de documentos que contêm o campo hairColor .
db.superheroes.count({ "aspects.hairColor": { $exists: true } });

// 18. Exercício 18: Remova apenas um documento publicado pela Sony Pictures .
db.superheroes.deleteOne({ publisher: "Sony Pictures" });

// 19. Exercício 19: Remova todos os documentos publicados pelo George Lucas .
db.superheroes.deleteMany({ publisher: "George Lucas" });