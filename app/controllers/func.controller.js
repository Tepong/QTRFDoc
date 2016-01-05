var Func = require('../../node_modules/mongoose').model('Func');
// var Param = require('../../node_modules/mongoose').model('Param');
// var Proj = require('../../node_modules/mongoose').model('Proj');

exports.create = function(req, res, next){
	var func = new Func({"funcname":"SuperScreen1","funcdesc":"SuperScreen1"});
	func.save(function(err){
		if(err){
			return next(err);
		}else{
			res.json(func);
		}
	});
};

exports.list = function(req, res, next){
	Proj.find({"projname":"SSCR"},function(err,abc){
		if(err){
			return next(err);
		}else{
			console.log(abc);
			res.json(abc);
		}
	});	
};

exports.createProj = function(req, res, next){
	var proj = new Proj(req.proj);
	console.log(proj);
	proj.save(function(err){
		if(err){
			return next(err);
		}else{
			// res.json(proj);
			console.log('pass');
		}
	});
	res.redirect('/');
};

exports.getProj = function(req, res, next, Project){	
	console.log('func route');
	var proj = new Proj({"projname":Project,"projdesc":Project});
	// req.proj = proj;
	console.log(proj);
	req.proj= proj;
	next();
	// Proj.findOne({
	// 	projname: Project
	// 	},function(err,proj){
	// 		if(err){
	// 			return next(err);
	// 		}else{
	// 			req.proj = proj;
	// 			next();
	// 		}
	// });
};

exports.createFunc = function(req, res, next){
	// var func = new Func(req.proj);
	// console.log('complete');
	// proj.save(function(err){
	// 	if(err){
	// 		return next(err);
	// 	}else{
	// 		// res.json(proj);
	// 	}
	// });

	req.Funct.save(function(err){
		if(err){
			return next(err);
		}else{
			// res.json(proj);
		}
	});
	console.log(req.proj);
	console.log(req.Funct);
	console.log('complete');
	res.redirect('/');
};

exports.getFunct= function(req, res, next, Funct){	
	// var proj = new Proj({"projname":Project,"projdesc":Project});
	// console.log(Funct);
	// var func = new Func({"funcname":Funct,"funcdesc":Funct, "projectid":req.proj._id});

	req.Funct= Funct;
	next();
};

exports.findFunc= function(req, res, next){	
	
	Func.find ({ 'projectid': req.proj._id }).populate ('Proj').exec (function (err, funs) {
    return res.json (funs);
  	});

	// var proj = new Proj({"projname":Project,"projdesc":Project});
	// console.log(Funct);
	// var func = new Func({"funcname":Funct,"funcdesc":Funct, "projectid":req.proj._id});

	// req.Funct= func;
	// next();
};

 exports.UpdateFunc =function(req,res,next){
	var Prjectname = "SSCR";
	var Functinname = req.body.fnName;
	var parmName = req.body.fnName;
	proj.update({ projectname: name, capital: capital, continent: continent}, function(name) {
	    res.redirect('/index/');
	});
};