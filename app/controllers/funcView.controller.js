var Func = require('../../node_modules/mongoose').model('Func');

exports.FuncDetailRender = function(req, res){
	
	Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			console.log(data);
			res.render('funcView',{datatoview:data, funcName:req.params.funcName});
		}
	});	

};

exports.FuncEdit = function(req, res){
	
	Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			// console.log(data);
			res.render('editFunction',{datatoview:data, funcName:req.params.funcName});
		}
	});	

};

exports.FuncDetailUpdate = function(req, res){
	// console.log(req.body);
	// res.json(req.body);
	Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			// console.log(data);
			res.render('funcView',{datatoview:data, funcName:req.params.funcName, statusTag:'True'});
		}
	});	

};


exports.createProj = function(req, res, next){
	//var proj = new Proj(req.proj);
	//console.log(proj);
	//proj.save(function(err){
		// if(err){
		// 	return next(err);
		// }else{
		// 	// res.json(proj);
		// 	console.log('pass');
		// }
	//});
	//res.redirect('/');
	res.render('addFunction')
};



exports.UpdateData= function(req,res){

var pjName="SUPERSCREEN";
var Fname =req.body.fnName;
var Fdes= req.body.fnDes;
var Pname=req.body.ParmName;
var ParD= req.body.ParmDesc;
var reqf= req.body.ReqName;
var DValue=req.body.DefValue;
// console.log(data);
			var conditions = { "funcname": req.params.funcName }
 			var update = { "funcname":Fname , 
 							"funcdesc":Fdes ,
 							"paramname":Pname,
 							"ParmDesc":ParD
 						 }
  			var options = { multi: false };
			console.log(Fname+"  "+Fdes+"  "+Pname+"  "+ParD+"  "+reqf+"  "+ DValue);
			console.log(req.body);
Func.update(conditions,update,options,function(err,data){

// Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			// FuncDetailUpdate();
			res.render('funcView',{datatoview:data, funcName:req.params.funcName, statusTag:'True'});
		}
	});	


};

// exports.getFuncName = function(req, res, next, funcName){	
// 	console.log(funcName);
// 	req.FuncName= funcName;
// 	next();
// };
