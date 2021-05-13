// 1- Calcule o valor absoluto do lucro total de cada produto.
db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    lucroTotal: { $abs: { $subtract: [{ $add: ["$purchase_price", "$taxes"] }, "$sale_price"] } } 
  }
}]);