var express = require('../node_modules/express');
var morgan = require('../node_modules/morgan');
// var compression = require('../node_modules/compression');
// var bodyParser = require('../node_modules/body-parser');
// var sass = require('../node_modules/node-sass-middleware');
// var validator = require('../node_modules/express-validator');
// var cookieSession = require('../node_modules/cookie-session');
// var session = require('../node_modules/express-session');
// var flash = require('../node_modules/connect-flash');
// var passport = require('../node_modules/passport');
// var RedisStore = require('../node_modules/connect-redis')(session);
// var config = require('./config');

module.exports = function(){
	var app = express();

	app.set('views', './app/views');
	app.set('view engine', 'jade');

	require('../app/routes/index.routes')(app);
	require('../app/routes/func.routes')(app);
	// require('../app/routes/test.routes')(app);
	app.use(express.static('./public'));
	return app;
};