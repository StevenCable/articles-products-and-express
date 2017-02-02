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

function newArticle(title, body, author){
  return db.any(`INSERT INTO articles (title, body, author) VALUES('${title}','${body}','${author}')`); 
}

function findArticleByTitle(title){
  console.log('find mark for me: ');
  return db.any(`SELECT * FROM articles WHERE title = '${title}'`);
}

function findArticleById(id){
  return db.any(`SELECT * FROM articles WHERE id = ${id}`);
}

function editArticleData(newArticle, oldArticle){
  return db.none(`UPDATE articles SET 
    title = '${newArticle.title}', 
    body = '${newArticle.body}', 
    author = '${newArticle.author}', 
    urlPath = '${encodeURIComponent(newArticle.uri)}' WHERE title = '${oldArticle.title}';`);
  }

function deleteArticle(title){
  return db.none(`DELETE FROM articles WHERE title  = '${title}'`); 
}

function getAllArticles(){
  console.log('getAllArticles mayne');
  return db.any('SELECT * FROM Articles');
}


module.exports = {
  getNewCounter,
  newArticle,
  findArticleByTitle,
  findArticleById,
  // editArticleData,
  deleteArticle,
  getAllArticles
};