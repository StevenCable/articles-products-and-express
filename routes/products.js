/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');


//POST redirect request
router.route('/')

  .get((req, res) =>{
    productModel.getAllProducts()
    .then(products => {
      res.render('./partials/productsIndex', {"products": products});
    })
    .catch(err =>{
      console.log(err);
    });
  })
  .post((req, res) => {
    productModel.newProduct(req.body.name, req.body.price, req.body.inventory)
    .then(product => {
      res.redirect('/products');
    })
    .catch(err =>{
      console.log(err);
    });
  });


//PUT redirect request
router.route('/:id')
  .get((req, res) =>{
    productModel.findProductById(req.params.id)
    .then(product => {
      console.log("product: ", product);
      res.render('./partials/productsIndex', {"products": product});
    })
    .catch(err =>{
      console.log(err);
    });
  })

  // .put((req,res) => {
  //   let productId = req.params.id;
  //   products.editProductData(productId, req.body);
  //   res.redirect(303, `${productId}`);
  // })

  .delete((req, res) => {
    productModel.deleteProduct(req.params.id)
    .then(deletedProduct => {
      res.render('./partials/deleteMsg',deletedProduct);
    })
    .catch(err =>{
      console.log(err);
    });
  });

// router.get('/:id/edit', (req, res) =>{
//   let productId = req.params.id;
//   res.render('./partials/product-edit', products.findProductById(productId));
// });






module.exports = router;