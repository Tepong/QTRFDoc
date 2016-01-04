module.exports = function(app){
	var func = require('../controllers/funcView.controller');

	// app.param('funcName', func.getFuncName);
	app.get('/FnView/:funcName/', func.FuncDetailRender);

};