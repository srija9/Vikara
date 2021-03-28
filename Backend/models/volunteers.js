const mongoose = require("mongoose");

const volunteersSchema = new mongoose.Schema({
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		required:true
	},
	issueID:{
		type: mongoose.Schema.Types.ObjectId,
		required:true
	}
});

const volunteers = mongoose.model('volunteers', volunteersSchema);
module.exports = volunteers;
