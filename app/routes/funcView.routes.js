module.exports = function(app){
	var func = require('../controllers/funcView.controller');
	
	app.get('/FnView/:funcName', func.FuncDetailRender);
	app.get('/FnView/FnEdit/:funcName/', func.FuncEdit);

	app.get('/addProj/', func.createProj);
	app.get('/addFunc/', func.showPageAdd);
	app.post('/addFunc/', func.createFunc);

	app.post('/FnView/:funcName/', func.UpdateData);

	app.post('/ActionStatus/', func.ShowStatus);
};