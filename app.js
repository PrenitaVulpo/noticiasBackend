var app = require('./config/server.js');

var rotaHome = require('./app/routes/index');
rotaHome(app);
var rotaForm = require('./app/routes/form_noticia');
rotaForm(app);
var rotaNoticias = require('./app/routes/noticias')(app);

//faz com que o express escute a porta informada, também recebe o callback
app.listen(process.env.PORT || 3000, function () {
    var porta = process.env.PORT;
    if (process.env.PORT == null){
        porta = 3000
    }
    console.log("Server up, listening on port %s", porta);
});