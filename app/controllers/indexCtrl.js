module.exports.index = function(application, req, res) {
    res.render('index');
}

module.exports.cadastrar = function(application, req, res) {
    res.send('cadastrar auqi!');
}