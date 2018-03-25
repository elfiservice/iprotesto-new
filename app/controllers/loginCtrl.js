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
    res.send(dados);
    //verifica se nao esta em branco e email valido
    //verifica dados no BD e redireciona para pag Home se existir
}
