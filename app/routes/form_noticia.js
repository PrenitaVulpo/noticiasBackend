const { check, validationResult } = require('express-validator');

module.exports = function(app){
    app.get('/form_noticia', function(req, res){
        res.render("admin/form_add_noticia.ejs")
    });

    var checagem = [check('titulo','O campo "título" é obrigatório.').notEmpty(),
                    check('resumo','O campo "resumo" é obrigatório.').notEmpty(),
                    check('resumo','O resumo deve conter entre 10 e 100 caracteres.').isLength({
                        min: 10,
                        max: 100,}),
                    check('autor','O campo "autor" é obrigatório.').notEmpty(),
                    check('data_noticia','O campo "data" é obrigatório.').notEmpty(),
                    check('noticia','O campo "notícia" é obrigatório.').notEmpty()];

    app.post('/noticias/salvar', checagem, function(req, res){
        var noticia = req.body;

        var errors = validationResult(req);
        if (!errors.isEmpty()) {
            //app.locals.validacao = {validacao: errors};
            console.log(errors);
            res.render("admin/form_add_noticia", {errors: errors});

            return //res.status(422).json({ errors: errors.array() })// ;


        }

        var connection = app.config.dbconnection;
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        noticiasModel.salvarNoticia(noticia,function(error, result) {
            res.redirect('/noticias');
        });

    });
}