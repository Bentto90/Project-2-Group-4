DROP DATABASE IF EXISTS horrormovies_db;
CREATE DATABASE horrormovies_db;

USE horrormovies_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL
);