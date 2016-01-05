module.exports = function(app){
	var func = require('../controllers/funcView.controller');
	
	app.get('/FnView/:funcName/', func.FuncDetailRender);
	app.get('/FnView/FnEdit/:funcName/', func.FuncEdit);
	//app.get('/addProj/:Project', func.createProj);
	app.get('/addProj/', func.createProj);
	app.get('/addFunc/', func.createFunc);


	//
	app.post('/FnView/:funcName/', func.UpdateData);
};