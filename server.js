/*jshint esversion: 6 */

const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const articles = require('./routes/articles');
const products = require('./routes/products');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const hbs = handlebars.create({
    extname: '.hbs',
    defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/products', products);
app.use('/articles', articles);


module.exports = app;



