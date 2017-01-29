DROP DATABASE IF EXISTS "articles_products_db";
CREATE DATABASE "articles_products_db" OWNER steven;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO steven;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO steven;


\c articles_products_db

DROP TABLE IF EXISTS "products";
CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY, 
  name varchar(69) NOT NULL, 
  price numeric, 
  inventory integer
);

-- DROP TABLE IF EXISTS "articles";
-- CREATE TABLE articles (

-- )
