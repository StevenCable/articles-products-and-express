/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const products = require('../db/products');
const data = products.getAllProducts;

//POST redirect request
router.route('/')
  .get((req, res) =>{
    res.render('./partials/products', products);
  })

  .post((req, res) => {
    if(req.body.name && req.body.price && req.body.inventory){
      products.newProduct(req.body.name,req.body.price,req.body.inventory);
      res.redirect(303,'/products');
    }
  // else{
  //   res.redirect('/products/new');
  // }
  });

//PUT redirect request
router.route('/:id')
  .get((req, res) =>{
    let productId = req.params.id;
    console.log('this did work', productId);
    res.render('./partials/products', products.findProductById(productId));
  })

  .put((req,res) => {
    let productId = req.params.id;
    products.editProductData(productId, req.body);
    res.redirect(303, `${productId}`);
  })

  .delete((req, res) => {
    let productId = req.params.id;
    if(products.findProductById(productId)){
      products.deleteProduct(productId);
      res.redirect(303, '/products');
    }
    // else{
    //   res.redirect('/products/new');
    // }
  });

router.get('/:id/edit', (req, res) =>{
  let productId = req.params.id;
  res.render('./partials/product-edit', products.findProductById(productId));
});






module.exports = router;