SELECT * FROM hotel.Books;
SELECT * FROM hotel.Books_Lent;
-- 1. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT Id, Title FROM hotel.Books AS b
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = Books_Lent.book_id
);
-- 2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e
-- que contêm a palavra "lost" no título.
SELECT Id, Title FROM hotel.Books AS b
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = book_id
    AND returned IS FALSE
    AND b.Title LIKE '%lost%'
);
-- 3. Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT `Name` FROM hotel.Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE c.CustomerId = CustomerID
);
-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do
-- cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT CUST.Name, CARS.Name
FROM hotel.Cars CARS
INNER JOIN hotel.Customers CUST
WHERE EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE CUST.CustomerId = CustomerID
    AND CarID = CARS.Id
);