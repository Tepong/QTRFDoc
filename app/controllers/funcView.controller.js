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

exports.FuncEdit = function(req, res){
	
	Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			res.render('editFunction',{datatoview:data, funcName:req.params.funcName});
		}
	});	

};

exports.FuncDetailUpdate = function(req, res){

	Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			res.render('funcView',{datatoview:data, funcName:req.params.funcName, statusTag:'True'});
		}
	});	

};


exports.createProj = function(req, res, next){
	res.render('addFunction')
};

exports.createFunc = function(req, res, next){
	Func.find().distinct('projname', function(err, data) {
	    if(err){
			return next(err);
		}else{
			Func.find({"projname":"SUPERSCREEN"},function(err,dataAll){
				if(err){
					return next(err);
				}else{
					res.render('addFunction',{datatoview:dataAll, allProj:data});				
				}
			});				
		}
	});	
};



exports.UpdateData= function(req,res){
	
	var toUadate=req.body;
	var conditions = { "funcname": req.params.funcName }
   	var options = { multi: false };


   
	var thing = new Func(toUadate);
   	Func.findOne({"funcname": req.params.funcName},function(err,findBefore){
   		if(err){
		 	return next(err);
		 }else{
		 	thing.save(function(err){
		   		if(err){
				 	return next(err);
				 }else{
				 	Func.remove({"_id": findBefore._id}, function(err){
				 		if(err){
						 	return next(err);
						 }else{
						 	Func.find({"projname":"SUPERSCREEN"},function(err,data){
								if(err){
									return next(err);
								}else{
									res.render('funcView',{datatoview:data, funcName:req.params.funcName, statusTag:'True'});
								}
							});	
						 }
				 	});
				 }
			});
		 }
   	});
};