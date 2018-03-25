module.exports.home = function(application, req, res) {

    if(req.session.autorizado != true) {
        res.send("Usuario não logado!");
        return;
      }


    res.render('home', {user: {email : req.session.emailUser}});
}