CREATE DATABASE IF NOT EXISTS zoologiico;

USE zoologico;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL
);

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);

CREATE TABLE animal(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    especie VARCHAR(30) NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(50) NOT NULL,
    cuidador_id INT NOT NULL,
	FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id)
);