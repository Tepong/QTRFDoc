module.exports = function(app){
	var func = require('../controllers/func.controller');
	// app.route('/signup')
	// 	.get(user.renderSignup)
	// 	.post(user.signup);
	// app.post('/login', user.login);
	// app.post('/logout', user.logout);
	// app.route('/user')
	// 	.post(user.create)
	// 	.get(user.list);
	// app.route('/user/:username')
	// 	.get(user.read)
	// 	.put(user.update)
	// 	.delete(user.delete);
	// app.param('username', user.userByUsername);

	app.param('Project', func.getProj);
	app.get('/allfunction', func.list);
	app.get('/addfunction', func.create);
	app.get('/addProj/:Project', func.createProj);
	
	// app.get('/addFunc/:Project/:Funct', func.createFunc);
	app.get('/addFunc/:Project/:Funct', func.findFunc);

	app.param('Funct', func.getFunct);


};