const mongoose = require("mongoose");


const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const issuesSchema = new mongoose.Schema({
	title:	{type:String, required:true},
	description:{type:String, required:true},
	backers:{type:Number, required:true},
	targetFund:{type: Number, required: true},
	collectedFund:{type:Number, required:true},
	media:[mongoose.Schema.Types.Mixed],
	user: mongoose.Schema.Types.ObjectId,
	location: 	{
		type: pointSchema,
		required: true
	}
});

issuesSchema.index({"location": "2dsphere"});

const issues = mongoose.model('issues', issuesSchema);
/*
	location:{
		type:{
			type: String,
			enum: ['Point']
		},
		coordinates:{
			type:[Number],
			required:true
		}
	},
*/
module.exports = issues;
