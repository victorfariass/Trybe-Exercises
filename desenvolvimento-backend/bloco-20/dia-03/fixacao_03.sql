SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');
SELECT * FROM sakila.customer
WHERE customer_id IN (269, 239, 126, 399, 142);
SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 100;
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;
SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176 
ORDER BY email ASC;
SELECT COUNT(*) quantidade_de_pagamentos FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-07';
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;