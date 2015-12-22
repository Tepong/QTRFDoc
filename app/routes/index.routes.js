module.exports = function(app){
	var index = require('../controllers/index.controller');
	app.get('/', index.render);
	app.get('/InsertTextbox', index.insertTextBoxrender);
	app.get('/OpenBrowser', index.OpenBrowserrender);
	app.get('/addFunction', index.addFunctionrender);
	app.get('/peng', index.peng);
	app.get('/MooTest',index.MooTest);
};