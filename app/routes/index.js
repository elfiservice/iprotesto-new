module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.indexCtrl.index(application, req, res);
	});

	application.post('/cadastrar', function(req, res){
		application.app.controllers.indexCtrl.cadastrar(application, req, res);
	});

	application.get('/login', function(req, res){
		application.app.controllers.indexCtrl.login(application, req, res);
	});

}