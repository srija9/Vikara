const express = require("express");
const bcrypt = require("bcryptjs");
const users = require("./models/users");
const router = express.Router()
const tokenAuth = require("./tokenAuth");

router.use(tokenAuth); //All user management endpoints are token authenticated
//User endpoints
	//Change Password
	//Change email
	//Change phone

async function hashPassword(password)
{
		return bcrypt.hash(password, 10);

}
router.post("/update_email",(req,res)=>{
	const whichUser= req.user.username;
    const newEmail=req.body.newEmail;
	
	users.findOne({email: whichUser})
		.then(doc=>{
			if(doc)
				{
					doc.email = newEmail;
					doc.save();
					res.json({message:"Email updated"});
				}
			else throw "Unregistered Email";
		})
		.catch(err=>{
			console.log(err);
			res.json({error: err})
		})
})

router.post("/update_password",(req,res)=>{
	const User = req.user.username;
	const {password, new_password} = req.body;
	users.findOne({email:User})
	.then(doc=>{
		if(doc)
		{
			if(bcrypt.compare(password, doc.password_hash))
			{
				hashPassword(new_password)
				.then((hash)=>{
					doc.password_hash = hash;
					doc.save();
					res.json({message:"Password updated"});
				})
		    }
			else
			{
				return res.json({error:"Incorrect password"});
			}		    
	        
		}
		else throw "Unregistered Email";
	})
	.catch(err=>{
		console.log(err);
		res.json({error: err})
	})
})

router.post("/update_phone",(req,res)=>{
	const User= req.user.username;
    const newPhone=req.body.newPhone;
	if(!newPhone)
	    return res.json({error: "Invalid phone number"});
	else
	{	
	users.findOne({email:User})
		.then(doc=>{
			if(doc)
				{
					doc.phone = Number(newPhone);
					doc.save();
					res.json({message:"Phone updated"});
				}
			else throw "Unregistered Email";
		})
		.catch(err=>{
			console.log(err);
			res.json({error: err})
		})
	}
})

module.exports = router;
