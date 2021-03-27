const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
	
	full_name: {
			type: String, 
			required: true
	},
	email:{
		type: String,
		required: true
	},
	password_hash:{
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	karma: Number
});

const users = mongoose.model('users', usersSchema);

module.exports = users;
