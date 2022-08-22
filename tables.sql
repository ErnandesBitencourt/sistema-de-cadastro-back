-- Active: 1660172395947@@35.226.146.116@3306@gebru-4211795-ernandes-bitencourt
CREATE TABLE IF NOT EXISTS Create_clientes_bemol (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         age   INT NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL,
         house INT NOT NULL
      );