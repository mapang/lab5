// Get all of our friend data
var data = require('../data.json');  // this is to get access to the json file

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};