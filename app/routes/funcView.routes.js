module.exports = function(app){
	var func = require('../controllers/funcView.controller');
	var bodyParser = require('../../node_modules/body_parser');
	// app.param('funcName', func.getFuncName);
	app.get('/FnView/:funcName/', func.FuncDetailRender);
	//app.post('/FnView/:funcName/', func.FuncDetailUpdate);
	app.get('/FnView/FnEdit/:funcName/', func.FuncEdit);
	 // app.post('/FnView/:funcName/', func.FuncDetailUpdate);




	// app.use(bodyParser());
	// app.use(bodyParser.json()); // support json encoded bodies
	// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
	app.post('/FnView/:funcName/', func.UpdateData);


	// app.post('/FnView/FnEdit/:funcName/', func.UpdateData);
	
};