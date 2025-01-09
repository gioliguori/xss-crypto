CREATE DATABASE applicazione;

USE applicazione;

CREATE TABLE posts(
    utente VARCHAR(255),
    commento VARCHAR(255),
    PRIMARY KEY(utente, commento)
);

ALTER TABLE posts ADD COLUMN timestamp DATETIME DEFAULT CURRENT_TIMESTAMP;
