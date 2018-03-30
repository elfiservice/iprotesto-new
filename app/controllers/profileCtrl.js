module.exports.profile = function(application, req, res) {

    if(req.session.autorizado != true) {
        res.send("Usuario não logado!");
        return;
      }


    res.render('profile', {user: {email : req.session.emailUser}});
}