-- DESAFIOS SOBRE INDEX

-- 1
CREATE FULLTEXT INDEX index_category ON sakila.category(name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action'); -- Query Cost: 0.35

DROP INDEX index_category ON sakila.category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%'; -- Query Cost: 1.85

-- 2
CREATE INDEX index_address ON sakila.address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693'; -- Query Cost: 0.95

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693'; -- Query Cost: 65.40