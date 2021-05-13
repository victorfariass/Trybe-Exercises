// 1- Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    valorEstoque: { $multiply: ["$sale_price", "$quantity"] }
  }
}]);

// 2- Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
db.products.aggregate([{
  $project: {
    _id: 0,
    name: 1,
    lucroTotal: {
      $multiply: [
        { $subtract: [
          "$sale_price",
          { $add: ["$purchase_price", "$taxes"] }
        ]},
        "$quantity"
      ]
    }
  }
}]);
