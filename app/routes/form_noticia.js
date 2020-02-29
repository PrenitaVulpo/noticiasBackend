const { check, validationResult } = require('express-validator');

module.exports = function(app){
    app.get('/form_noticia', function(req, res){
        res.render("admin/form_add_noticia.ejs")
    });
    app.post('/noticias/salvar', [check('titulo','O campo "título" é obrigatório.').notEmpty()], function(req, res){
        var noticia = req.body;
        /*check('titulo','O campo "título" é obrigatório.').notEmpty();
        check('resumo','O campo "resumo" é obrigatório.').notEmpty();
        check('resumo','O resumo deve conter entre 10 e 100 caracteres.').len(10, 100);
        check('autor','O campo "autor" é obrigatório.').notEmpty();
        check('data','O campo "data" é obrigatório.').notEmpty();
        check('data_noticia', 'Data em formato diferente de aaaa/mm/dd.').isDate({format: 'YYYY-MM-DD'});
        check('noticia','O campo "notícia" é obrigatório.').notEmpty();*/

        var erros = validationResult(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        var connection = app.config.dbconnection;
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        noticiasModel.salvarNoticia(noticia,function(error, result) {
            res.redirect('/noticias');
        });

    });
}