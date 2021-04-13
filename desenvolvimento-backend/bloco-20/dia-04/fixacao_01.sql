-- 1. Insira um novo funcionário na tabela sakila.staff.
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
VALUES('Victor', 'Farias', 4, 2, 'Victor');
-- 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username)
VALUES
('Larissa', 'Bastos', 4, 1, 'Larissa'),
('Maria Vitoria', 'Bastos', 4, 1, 'Mavi');
-- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
SELECT * FROM sakila.actor;
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff LIMIT 5;
-- 4. Cadastre três categorias de uma vez só na tabela sakila.category.
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
VALUES
('Comedia'),
('Terror'),
('Drama');
-- 5. Cadastre uma nova loja na tabela sakila.store.
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);