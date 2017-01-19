/*jshint esversion: 6 */

let products = [];
let idCounter = 0;

function getNewCounter(){
  idCounter++;
  return idCounter;
}

function newProduct(name, price, inventory){
  let newProduct = {};
    newProduct.id = getNewCounter();
    newProduct.name = name;
    newProduct.price = parseInt(price);
    newProduct.inventory = parseInt(inventory);
    products.push(newProduct);
    console.log("new product: ",newProduct);
}

function findProductById(id){
  console.log("id: ", id);
  for (var i = 0; i < products.length; i++) {
    // console.log("id: ",typeof id);
    // console.log("products[i]", typeof products[i].id);
    let intID = parseInt(id);
    if(products[i].id === intID){
      console.log('found it', products[i]);
      return products[i];
    }else{

      console.log('nope');
    }
  }
}

function editProductData(id, newProperties){
  let intID = parseInt(id);
  let updatedProduct = findProductById(intID);
  Object.assign(updatedProduct, newProperties);
  console.log("updated product: ",updatedProduct);
  }

function deleteProduct(id){
  for (var i = 0; i < products.length; i++) {
    if(products[i].id === parseInt(id)){
      console.log('products[i]: ', products[i]);
      products.splice(products.indexOf(products[i]),1);
    }
  }
}

function getAllProducts(){
  return products;
}


module.exports = {

  products,
  getNewCounter,
  newProduct,
  findProductById,
  editProductData,
  deleteProduct,
  getAllProducts,

};