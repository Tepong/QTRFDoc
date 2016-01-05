var config = require('./config');
var mongoose = require('../node_modules/mongoose');

module.exports = function() {
	mongoose.set('debug', config.debug);
	var db = mongoose.connect(config.mongoUri);
	
	require('../app/models/func.model');
	return db;
};