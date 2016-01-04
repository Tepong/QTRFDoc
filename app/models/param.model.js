var  mongoose = require('../../node_modules/mongoose');
var Schema = mongoose.Schema;

var ParamrSchema = new Schema({
	paramname:String,
	paramdesc:String,
	paramdef:String,
	funcid:{
		type: Schema.ObjectId,
		ref: 'Func'
	}
});

mongoose.model('Param', ParamrSchema);
