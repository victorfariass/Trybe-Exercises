-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos
-- feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION MostraQuantidadeTotalDePagamentos(id INT)
RETURNS DOUBLE READS SQL DATA
BEGIN
	DECLARE quantidade DOUBLE;
	SELECT COUNT(*) FROM sakila.payment
	WHERE customer_id = id
    INTO quantidade;
	RETURN quantidade;
END $$
DELIMITER ;

SELECT MostraQuantidadeTotalDePagamentos(4);
-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao
-- registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION MostraFilmeVinculadoAoInventario(id INT)
RETURNS VARCHAR(500) READS SQL DATA
BEGIN
	DECLARE nomeFilme VARCHAR(500);
    SELECT title FROM sakila.film AS f
	INNER JOIN sakila.inventory AS i ON f.film_id = i.film_id
	WHERE i.inventory_id = id
    INTO nomeFilme;
    RETURN nomeFilme;
END $$
DELIMITER ;

SELECT MostraFilmeVinculadoAoInventario(56);
-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' )
-- e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$

CREATE FUNCTION MostraQuantidadeTotalNaCategoria(categoria VARCHAR(20))
RETURNS DOUBLE READS SQL DATA
BEGIN
	DECLARE quantidade DOUBLE;
	SELECT COUNT(*) FROM sakila.film_category AS fc
	INNER JOIN sakila.category AS c ON fc.category_id = c.category_id
	WHERE c.name = categoria INTO quantidade;
    RETURN quantidade;
END $$
DELIMITER ;

SELECT MostraQuantidadeTotalNaCategoria('Music');