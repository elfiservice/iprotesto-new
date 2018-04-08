module.exports.profile = function(application, req, res) {

    if(req.session.autorizado != true) {
        res.send("Usuario não logado!");
        return;
      }


    res.render('profile', {user: {email : req.session.emailUser}});
}

module.exports.states = function(application, req, res) {

    var connection = application.config.dbConnection;
    var ProfileDAO = new application.app.models.ProfileDAO(connection);

    ProfileDAO.getStates(req, res);

}