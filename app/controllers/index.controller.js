var Func = require('../../node_modules/mongoose').model('Func');

exports.render = function(req, res){
	Func.find().distinct('projname', function(err, allPr) {
	    if(err){
				return next(err);
			}else{
				Func.find({},function(err,dataAll){
					if(err){
						return next(err);
					}else{
						res.render('index',{datatoview:dataAll, allProj:allPr, dataFunc:'undefined'});			
					}
				});				
			}
	});	
};

exports.addFunc = function(req, res, next){
	var user = new User(req.body);
	user.save(function(err){
		if(err){
			return next(err);
		}else{
			res.json(user);
		}
	});
};