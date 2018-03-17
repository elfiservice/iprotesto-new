module.exports.index = function(application, req, res) {
    res.render('index', {validacao: {}, dados: {}});
}

module.exports.cadastrar = function(application, req, res) {
    const dados = req.body;

    //validate email and pass
    req.assert('email', 'seu melhor Email').notEmpty();
    req.assert('email', 'com um Email válido').isEmail();
    req.assert('senha', 'uma senha segura').notEmpty();

    const erros = req.validationErrors();
    if(erros) {
        res.render('index', {validacao: erros, dados: dados});
        return;
    }

    //instace of model to insert user
    const connection = application.config.dbConnection;
    const UserDAO = new application.app.models.UserDAO(connection);

    UserDAO.create(dados);

    res.send(dados);
}