module.exports.home = function(application, req, res) {

    if(req.session.autorizado != true) {
        res.send("Usuario não logado!");
        return;
      }


    res.render('home', {user: {email : req.session.emailUser}});
}

module.exports.logout = function(application, req, res) {
    req.session.destroy(function(err) {
        res.render('index', {validacao: {}, dados: {}});
      });    
}