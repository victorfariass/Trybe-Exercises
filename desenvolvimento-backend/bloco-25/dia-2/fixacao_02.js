// 1- Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.
db.products.aggregate([{
  $project: {
    name: 1,
    custoTotal: { $add: ["$purchase_price", "$taxes"] },
    _id: 0
  }
}]);
