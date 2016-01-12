var Func = require('../../node_modules/mongoose').model('Func');

exports.FuncDetailRender = function(req, res){
	Func.find().distinct('projname', function(err, allPr) {
	    if(err){
			return next(err);
		}else{
			Func.find({},function(err,dataAll){
				if(err){
					return next(err);
				}else{
					Func.findOne({"funcname":req.params.funcName},function(err,detail){
						if(err){
							return next(err);
						}else{
							res.render('funcView',{datatoview:dataAll, allProj:allPr, dataFunc:detail});	
						}
					});		
				}
			});				
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

exports.showPageAdd = function(req, res, next){
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

exports.createFunc= function(req,res){
	var toUadate=req.body;
	var conditions = { "funcname": toUadate.funcname, "projname": toUadate.projname }
   	var options = { multi: false };
	var data = new Func(toUadate);
   	Func.findOne(conditions,function(err,findBefore){
   		if(err){
		 	return next(err);
		 }else if(findBefore==null) {
		 	data.save(function(err){
		 		if(err){
		 			return next(err);		 			
		 		} else {
		 			Func.find().distinct('projname', function(err, allPr) {
					    if(err){
							return next(err);
						}else{
							Func.find({"projname":toUadate.projname},function(err,dataAll){
								if(err){
									return next(err);
								}else{
									console.log(toUadate.funcname);
									Func.findOne({"funcname":toUadate.funcname},function(err,detail){
										if(err){
											return next(err);
										}else{
											console.log(detail);
											res.render('funcView',{datatoview:dataAll, allProj:allPr, dataFunc:detail, statusTag:'AddSuccess'});	
										}
									});		
								}
							});				
						}
					});	
		 		};	
		 	});
		 }else{
		 	Func.find().distinct('projname', function(err, allPr) {
			    if(err){
					return next(err);
				}else{
					Func.find({"projname":toUadate.projname},function(err,dataAll){
						if(err){
							return next(err);
						}else{
							console.log(toUadate.funcname);
							Func.findOne({"funcname":toUadate.funcname},function(err,detail){
								if(err){
									return next(err);
								}else{
									console.log(detail);
									res.render('funcView',{datatoview:dataAll, allProj:allPr, dataFunc:detail, statusTag:'AddUnsuccess'});	
								}
							});		
						}
					});				
				}
			});	
		 };		 	
   	});
};

	


exports.ShowStatus = function(req, res, next){

	Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			res.render('showStatus',{datatoview:data});
		}
	});	
};

exports.UpdateData= function(req,res){
	
	var toUadate=req.body;
	var conditions = { "funcname": req.params.funcName }
   	var options = { multi: false };
	var thing = new Func(toUadate);

Func.find().distinct('projname', function(err, allPr) {
	    if(err){
			return next(err);
		}else{
			Func.find({},function(err,dataAll){
				if(err){
					return next(err);
				}else{
					Func.findOne({"funcname":req.params.funcName},function(err,detail){
						if(err){
							return next(err);
						}else{

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
															Func.findOne({"funcname":toUadate.funcname},function(err,detail1){
															if (err) {
																return next(err);
															} else{
																res.render('funcView',{datatoview:dataAll, allProj:allPr, dataFunc:detail1,statusTag:'True'});
															};
														});
														// res.render('funcView',{datatoview:data,funcName:req.params.funcName, statusTag:'True'});									
															
														}
									
													});	
						 						}
				 							});
				 						}
									});
		 						}
   							});
   						}
					});		
				}
			});				
		}
	});	

};


exports.DeleteFunction= function(req,res){
	var conditions = { "funcname": req.params.funcName, "projname":"SUPERSCREEN" }

	Func.findOne(conditions,function(err,findBefore){
			if (err) {
				return next(err);
			}else{
			// 	console.log(findBefore._id);
			// 	res.json(findBefore);
			// }
				Func.remove(conditions, function(err){
					if (err) {
				 		return next(err);
				 	}else{
							Func.find({"projname":"SUPERSCREEN"},function(err,data1){
								if(err){
										return next(err);
								}else{
										res.render('showStatus',{datatoview:data1});
									}
							});	
					}
				});
			};
		});

};

exports.testingQS =function(req,res){
	
}