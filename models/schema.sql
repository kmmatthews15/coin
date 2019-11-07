CREATE DATABASE coindb;

USE coindb;

CREATE TABLE coins (
	id INT AUTO_INCREMENT NOT NULL, 
    description VARCHAR(255),
    createdAT TIMESTAMP NOT NULL, 
    PRIMARY KEY(id)
    );