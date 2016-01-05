module.exports = function(app){
	var func = require('../controllers/funcView.controller');
	
	app.get('/FnView/:funcName/', func.FuncDetailRender);
	app.get('/FnView/FnEdit/:funcName/', func.FuncEdit);

	//
	app.post('/FnView/:funcName/', func.UpdateData);
};