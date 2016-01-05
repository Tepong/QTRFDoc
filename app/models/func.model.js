var mongoose = require('../../node_modules/mongoose');
var Schema = mongoose.Schema;

var funcSchema = new Schema({
	projname:String,
	funcname:String,
	funcdesc:String,
	funcgroup:String,
	params:[paramSchema]
});

var paramSchema = new Schema({
	paramname:String,
	paramdesc:String,
	paramrequire:String,
	paramdefaultvalue:String
});

mongoose.model('Func', funcSchema);