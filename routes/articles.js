/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const articleModel = require('../models/articleModel');


//POST redirect request
router.route('/')
  .get((req, res) =>{
    articleModel.getAllArticles()
    .then(articles => {
      res.render('./partials/articlesIndex', {"articles": articles});
    })
    .catch(err =>{
      console.log(err);
    });
  })
  .post((req, res) => {
    articleModel.newArticle(req.body.title, req.body.body, req.body.author)
    .then(article => {

      res.redirect('/articles');
    })
    .catch(err =>{
      console.log(err);
    });
  });
//GET page template with form to POST new article
router.get('/new', (req,res) => {
  res.render('articles/new');
});

//PUT redirect request
router.route('/:title')
  .get((req, res) =>{
    articleModel.findArticleByTitle(req.body.title)
    .then(article => {
      res.render('./partials/articles', {"articles": article});
    })
    .catch(err =>{
      console.log(err);
    });
  })

 .put((req,res) => {
    articleModel.editArticleData(req.body, req.params.title)
    .then(newArticle => {
      res.redirect(303,`/articles/${encodeURIComponent(newArticle.title)}`);
    })
    .catch(er =>{
      console.log(err);
    });
  //   let articleId = req.params.id;
  //   articles.editArticleData(articleId, req.body);
  //   res.redirect(303, `${articleId}`);
  })

 .delete((req, res) => {
    articleModel.deleteArticle(req.params.title)
    .then(deletedArticle => {
      res.render('./partials/deleteMsg',deletedArticle);
    })
    .catch(err =>{
      console.log(err);
    });
  });
router.route('/:title/edit')

  .get((req,res) => {
    let articleTitle = req.body.title;

    articleModel.findArticleByTitle(articleTitle)
    .then(newArticle => {
      res.render(`/partials/editArticle}`, {});
    })
    .catch(er =>{
      console.log(err);
    });
  });





module.exports = router;