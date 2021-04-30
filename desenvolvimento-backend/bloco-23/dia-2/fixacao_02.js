// 1. Selecione e faça a contagem dos restaurantes que não possuem avaliação menor ou igual a 5 , essa query também deve retornar restaurantes que não possuem o campo avaliação.
db.restaurants.count({ rating: { $not: { $lte: 5 } } });

// 2. Selecione e faça a contagem dos restaurante em que a avaliação seja maior ou igual a 6 , ou restaurantes localizados no bairro Brooklyn.
db.restaurants.count({ $or: [{ rating: { $gte: 6 } }, { borough: "Brooklyn" }] });

// 3. Selecione e faça a contagem dos restaurantes localizados nos bairros Queens , Staten Island e Broklyn e possuem avaliação maior que 4 .
db.restaurants.count({
    $and: [
      { borough: { $in: [ "Queens", "Staten Island", "Broklyn" ] } },
      { rating: { $gt: 4 } }
    ]
});

// 4. Selecione e faça a contagem dos restaurantes onde nem o campo avaliação seja igual a 1 , nem o campo culinária seja do tipo American .
db.restaurants.count({
    $and: [
      { rating: { $ne: 1 } },
      { cuisine: { $ne: "American" } }
    ]
});

// 5. Selecione e faça a contagem dos resturantes em que a avaliação seja maior que 6 ou menor que 10 , e esteja localizado no bairro Brooklyn ou não possuem culinária do tipo Delicatessen .
db.restaurants.count({ 
  $and: [
    { $or: [ { rating: { $gt: 6, $lt: 10 } } ]}, 
    { $or: [ { borough: "Brooklyn" }, { cuisine: { $ne: "Delicatessen" } } ] }
  ]
});