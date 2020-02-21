var express = require('express');
var app = express();

//definindo o ejs como engine de views
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index")
});

app.get('/form_noticia', function(req, res){
    res.render("admin/form_add_noticias")
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias")
});

//faz com que o express escute a porta informada, também recebe o callback
app.listen(process.env.PORT || 3000, function () {
    var porta = process.env.PORT;
    if (process.env.PORT == null){
        porta = 3000
    }
    console.log("Server up, listening on port %s", porta);
});