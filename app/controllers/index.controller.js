var Func = require('../../node_modules/mongoose').model('Func');

exports.render = function(req, res){
	Func.find({"projname":"SUPERSCREEN"},function(err,data){
		if(err){
			return next(err);
		}else{
			// res.json(data);
			// res.render('test',{datatoview:data.toJSON()});
			// res.render('test',{datatoview:data});
			res.render('index',{datatoview:data});
		}
	});	

};
// exports.render = function(req, res){
// 	res.render('index',{
// 		title: 'QTRF Document',
// 		username: 'Pong'
// 	});
// };

exports.insertTextBoxrender = function(req, res){
	res.render('insertTextBox',{
		title: 'QTRF Document',
		username: 'Pong'
	});
};


exports.OpenBrowserrender = function(req, res){
	res.render('OpenBrowser',{
		title: 'QTRF Document',
		username: 'Pong'
	});
};

exports.EditFunctionrender = function(req, res){
	res.render('EditFunction',{
		title: 'QTRF Document',
		username: 'Pong'
	});
};

exports.addFunctionrender = function(req, res){
	res.render('addFunction',{
		title: 'QTRF Document',
		username: 'Pong'
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


var SuperScreen = {
	"Function":[
	  {
	    "FunctionName" : "Login",
	    "FunctionDescription" : "Login super screen",
	    "Detail":[{
	      "Parameter": "NO PARAMETER",
	      "Description": "-"
	      }
	    ]
	  },{
	    "FunctionName" : "InsertTextbox",
	    "FunctionDescription" : "Insert text into text box",
	    "Detail":[{
	      "Parameter": "TextBoxName",
	      "Description": "TextBoxName : - SearchMainPackage -SearchPackage - Service Name -Mobile Number"
	      },{
	      "Parameter": "Value",
	      "Description": "-"
	      },{
	      "Parameter": "Verify",
	      "Description": "-"
	      }
	    ]
	  },{
	    "FunctionName" : "OpenBrowser",
	    "FunctionDescription" : "Open IE Browser",
	    "Detail":[{
	      "Parameter": "Url",
	      "Description": "-"
	      }
	    ]
	  },{
	    "FunctionName" : "PressButton",
	    "FunctionDescription" : "Left Click on Button",
	    "Detail":[{
	      "Parameter": "ButtonName",
	      "Description": "ButtonName : - Next - Previous - Prev"
	      }
	    ]
	  },{
	    "FunctionName" : "PressLink",
	    "FunctionDescription" : "Left Click on Link",
	    "Detail":[{
	      "Parameter": "LinkName",
	      "Description": "Link Name"
	      }
	    ]
	  },{
	    "FunctionName" : "PressTabMenu",
	    "FunctionDescription" : "Left Click on Tab",
	    "Detail":[{
	      "Parameter": "TabName",
	      "Description": "Name of Tab: - Existing Package - Main & On Top Package - High Content Package - Show Repeat Activity - Show All Activity - Create Activity"
	      }
	    ]
	  },{
	    "FunctionName" : "PressTabMenu",
	    "FunctionDescription" : "Left Click on Tab",
	    "Detail":[{
	      "Parameter": "TabName",
	      "Description": "Name of Tab: - Existing Package - Main & On Top Package - High Content Package - Show Repeat Activity - Show All Activity - Create Activity"
	      }
	    ]
	  }
	]
}