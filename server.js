// var connect = require('./node_modules/connect');
// var app = connect();
//test
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// var uri = 'mongodb://localhost/twitter_clone';

// var db = mongoose.connect(config.mongodbUri);
// var mongoose = require('./config/mongoose');
// var express = require('./config/express');
// var passport = require('./config/passport');

// var db = mongoose();
// var app = express();
// var passport = passport();


// app.get('/', function(req, res) {
// 	    res.sendfile(html_dir + 'index.html');
// 	});

// app.listen(3000);
// console.log('Server running at http://localhost:3000');

// module.exports = app;


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();


app.listen(3000);
console.log('Server running at http://localhost:3000');
module.exports = app;