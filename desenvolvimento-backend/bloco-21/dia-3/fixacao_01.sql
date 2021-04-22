-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator
-- ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE MostraAtoresMaisPopulares()
BEGIN
    SELECT actor_id, COUNT(*) AS quantidade_de_filmes FROM sakila.film_actor
    GROUP BY actor_id
    ORDER BY quantidade_de_filmes DESC
    LIMIT 10;
END $$

DELIMITER ;

CALL MostraAtoresMaisPopulares();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e
-- que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film,
-- film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE MostraCategoriaDoFilme(IN categoria VARCHAR(30))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, c.name
	FROM sakila.film AS f
	INNER JOIN sakila.film_category AS fc ON f.film_id = fc.film_id
	INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
	WHERE c.name = categoria;
END $$

DELIMITER ;

CALL MostraCategoriaDoFilme('Comedy');
-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está
-- ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE MostraClienteAtivo(IN emailCliente VARCHAR(50), OUT esta_ativo DOUBLE)
BEGIN
	SELECT active INTO esta_ativo
    FROM sakila.customer
    WHERE email = emailCliente;
END $$

DELIMITER ;

CALL MostraClienteAtivo('MARY.SMITH@sakilacustomer.org', @esta_ativo);
SELECT @esta_ativo;