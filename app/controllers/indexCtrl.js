module.exports.index = function(application, req, res) {
    res.render('index', {validacao: {}, dados: {}});
}

module.exports.cadastrar = function(application, req, res) {
    const dados = req.body;
    console.log(dados);
    //validate email and pass
    req.assert('email', 'Deixe seu melhor Email').isEmail();
    req.assert('senha', 'Entre com uma senha segura').notEmpty();

    const erros = req.validationErrors();
    if(erros) {
        res.render('index', {validacao: erros, dados: dados});
        return;
    }

    
    
    //instace of model to insert user
    const connection = application.config.dbConnection;
    const UserDAO = new application.app.models.UserDAO(connection);

  
    UserDAO.create(dados, req, res);

    //res.send(dados);
}

module.exports.login = function(application, req, res) {
    res.render('login', {dados: {}, validacao: {}});
}