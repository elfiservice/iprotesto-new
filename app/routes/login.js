module.exports = function(application){
	application.post('/entry', function(req, res){
		application.app.controllers.loginCtrl.entry(application, req, res);
	});


}