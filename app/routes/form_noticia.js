module.exports = function(app){
    app.get('/form_noticia', function(req, res){
        res.render("admin/form_add_noticia.ejs")
    });
    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body

        var connection = app.config.dbconnection;
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.salvarNoticia(noticia, connection,function(error, result) {
            res.redirect('/noticias');
        });

    });
}