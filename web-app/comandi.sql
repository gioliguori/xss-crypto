CREATE DATABASE applicazione;

USE applicazione;

CREATE TABLE posts (
    id INT AUTO_INCREMENT,
    utente VARCHAR(255),
    commento text,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id) 
);