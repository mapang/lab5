var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log("addFriend called");

	var name = req.query.name;
	var description = req.query.description;

	var newFriend = {
		name: name,
		description: description,
		imageURL:"http://lorempixel.com/400/400/people"
	}

	data.friends.push(newFriend);
	res.redirect('/'); //takes you back to index route
 }