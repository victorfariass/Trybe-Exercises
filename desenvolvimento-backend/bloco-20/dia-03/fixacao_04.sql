SELECT * FROM sakila.payment;
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';
SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo
SELECT COUNT(payment_date) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';
SELECT COUNT(payment_date) FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01 00:00:00' AND '2005-08-22 23:59:59';
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-28 22:%';