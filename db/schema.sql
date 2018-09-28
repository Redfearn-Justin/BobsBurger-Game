-- Creating Database -- 
CREATE DATABASE burgers_db;

-- selecting DB to USE it --
USE burgers_db;

-- Creating table to be used to store data -- 
CREATE TABLE burgers_table (
id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN DEFAULT false,
-- for delete functionality --
-- release BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);
