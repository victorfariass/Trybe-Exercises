-- DESAFIOS SOBRE VIEW

-- 1
CREATE VIEW film_with_categories AS
SELECT f.title, fc.category_id, c.name
FROM sakila.film AS f
INNER JOIN sakila.film_category as fc ON fc.film_id = f.film_id
INNER JOIN sakila.category as c ON c.category_id = fc.category_id
ORDER BY f.title;
-- 2
CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name, ' ', last_name) AS actor, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON fa.actor_id = a.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id
ORDER BY actor; 
-- 3
CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, c.city_id, c.city
FROM sakila.address AS a
INNER JOIN sakila.city AS c ON c.city_id = a.city_id
ORDER BY c.city;
-- 4
CREATE VIEW movies_languages AS
SELECT f.title, l.language_id, l.name AS language
FROM sakila.film AS f
INNER JOIN sakila.language AS l ON l.language_id = f.language_id;