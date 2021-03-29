const mongoose = require("mongoose");

const issuesSchema = new mongoose.Schema({
	title:	{type:String, required:true},
	description:{type:String, required:true},
	location:{
		type:{
			type: String,
			enum: ['Point'];
		},
		coordinates:{
			type:[Number],
			required:true
		}
	},
	backers:{type:Number, required:true},
	targetFund:{type: Number, required: true},
	images:[String],
	videos:[String]
});

const issues = mongoose.model('issues', issuesSchema);

module.exports = issues;
