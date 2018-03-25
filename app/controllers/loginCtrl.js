module.exports.entry = function(application, req, res) {
    // res.send('entrando');
    //pegar dados do form
    let dados = req.body;

    req.assert('email', 'Entre com um Email válido').isEmail();
    req.assert("senha", "Sua Senha").notEmpty();
  
    const erros = req.validationErrors();
    if(erros) {
      res.render("login", {validacao: erros, dados: dados});
      return;
    }

    //verifica dados no BD e redireciona para pag Home se existir
    const connection = application.config.dbConnection;
    const UserDAO = new application.app.models.UserDAO(connection);

    UserDAO.logInto(dados, req, res);

}
