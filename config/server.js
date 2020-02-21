var express = require('express');
var app = express();

//definindo o ejs como engine de views
app.set('view engine', 'ejs');
app.set('views', './views');

module.exports = app;