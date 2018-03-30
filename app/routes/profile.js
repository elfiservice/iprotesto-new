module.exports = function(application){
	application.get('/profile', function(req, res){
		application.app.controllers.profileCtrl.profile(application, req, res);
	});

}