// const PG_PASS = process.env.PG_PASS;
const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'articles_products_db',
  user: 'postgres',
  password: 'postgres' 
});

function getNewCounter(){
  idCounter++;
  return idCounter;
}

function newProduct(name, price, inventory){
  return db.any(`INSERT INTO products (name, price, inventory) VALUES('${name}',${price},${inventory})`); 
}

function findProductById(id){
  return db.any(`SELECT * FROM products WHERE id = ${id}`);
}

// function editProductData(id, newProperties){

//   let intID = parseInt(id);
//   let updatedProduct = findProductById(intID);
//   Object.assign(updatedProduct, newProperties);
//   console.log("updated product: ",updatedProduct);
//   }

function deleteProduct(id){
  return db.none(`DELETE FROM products WHERE id = ${id}`); 
}

function getAllProducts(){
  console.log('getAllProducts mayne');
  return db.any('SELECT * FROM products');
}


module.exports = {
  getNewCounter,
  newProduct,
  findProductById,
  // editProductData,
  deleteProduct,
  getAllProducts
};