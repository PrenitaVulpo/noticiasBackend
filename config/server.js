var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

app.use(bodyParser.urlencoded({extended:true}));
app.use(check());

consign().include('/app/routes')
    .then('/config/dbconnection.js')
    .then('/app/models')
    .into(app);

//definindo o ejs como engine de views
app.set('view engine', 'ejs');
app.set('views', './views');

module.exports = app;