var mongoose = require('../../node_modules/mongoose');
var Schema = mongoose.Schema;



var paramSchema = new Schema({

	paramname:String,
	paramdesc:String,
	paramrequire:String,
	paramdefaultvalue:String
});

var funcSchema = new Schema({
	projname:String,
	funcname:String,
	funcdesc:String,
	funcgroup:String,
	params:[paramSchema]
});

mongoose.model('Func', funcSchema);