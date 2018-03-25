module.exports = function(application){
	application.get('/home', function(req, res){
		application.app.controllers.homeCtrl.home(application, req, res);
	});
}