// 1- Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    sale_price: 1,
    precoPromocional: {
      $divide: ["$sale_price", 2]
    }
  }
}]);
