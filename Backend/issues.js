const express = require("express");
const router = express.Router();
const tokenAuth = require("./tokenAuth")
const Issue = require("./models/issues");
const User = require("./models/users");

//Multer config
const multer = require("multer");
const storage = multer.diskStorage({
	destination: function (req, res, cb){
		cb(null, 'media/');
	},
	filename: function (req, file,cb){
		cb(null, req.user.username.substring(0, req.user.username.indexOf("@")) + '-' + Date.now() + '.' +  file.mimetype.substring(file.mimetype.indexOf("/")+1));
	}
})
const upload = multer({storage:storage})

router.use(tokenAuth); // All issues endpoints must be authenticated

//issues endpoints;

	//	creating a new issue
	//	back an issue
	//	fund an issue
	//	delete an issue
	//	add media

router.post("/newIssue", upload.array("photos", 12),(req, res)=>{

	var inp = req.body;

	if(!inp.title || !inp.description || !inp.targetFund)
		return res.json({error: "Invalid Fields"});
	else
	{
		User.findOne({email: req.user.username})
		.then(doc1 => {
			var newIssue = new Issue({
				title: req.body.title,
				description: req.body.description,
				location: {coordinates: JSON.parse(req.body.location)},
				backers: 0,
				targetFund: Number(req.body.targetFund),
				media:req.files,
				user:doc1._id
			});

			doc1.issues.push(newIssue._id); //add this issue to the user's list.
			doc1.save();
			return newIssue.save()
		})
		.then(doc2 => {
			res.json({message: "New issue created!"});
		})
		.catch(err=>{
			console.log(err);
			return res.json({error: err});
		})
	}
})

router.get("/fetchMyIssues", (req, res)=>{
	User.find({email: req.user.username})
	.then(docs => {
		console.log(docs);
		res.json({message: "hhi"});
	})
	.catch(err =>{
		console.log(err);
		res.json({error: err});
	})
})

router.post("inc_backer" ,(req,res)=>{
    Issue.findOne({_id:req.body._id})
    .then(doc=>{
        doc.backers = doc.backers + 1;
        doc.save();
    })
})

router.post("dec_backer", (req,res)=>{
    Issue.findOne({_id:req.body._id})
    .then(doc=>{
        if(doc.backers>0)
        {
            doc.backers = doc.backers - 1;
            doc.save();
        }
    })
})

module.exports = router;
