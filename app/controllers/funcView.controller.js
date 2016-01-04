var Func = require('../../node_modules/mongoose').model('Func');

exports.FuncDetailRender = function(req, res){
	
	Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			res.render('funcView',{datatoview:data, funcName:req.params.funcName});
		}
	});	

};

// exports.getFuncName = function(req, res, next, funcName){	
// 	console.log(funcName);
// 	req.FuncName= funcName;
// 	next();
// };
