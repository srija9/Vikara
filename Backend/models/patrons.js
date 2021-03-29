const mongoose = require("mongoose");

const patronsSchema = new mongoose.Schema({
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		required:true
	},
	issueID:{
		type: mongoose.Schema.Types.ObjectId,
		required:true
	},
	amountDonated:{
		type: Number,
		required:true
	}
});

const patrons = mongoose.model('patrons', patronsSchema);
module.exports = patrons;
