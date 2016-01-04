var  mongoose = require('../../node_modules/mongoose');
var Schema = mongoose.Schema;

var ProjSchema = new Schema({
	projname:String,
	projdesc:String
});

mongoose.model('Proj', ProjSchema);
