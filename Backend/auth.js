require("dotenv").config();

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const users = require("./models/users");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


async function hashPassword(password)
{
	return bcrypt.hash(password, 10);
}
async function generateAccessToken(object)
{
	return new Promise((resolve, reject)=>{
		return resolve(jwt.sign(object, process.env.TOKEN_SECRET));
	})
}



//Authentication endpoints

// http://localhost:9000/auth/login


router.post("/login", (req, res)=>{

	const {email, password} = req.body;
	if(!email || !password)
		return res.json({error: "Invalid email or password"});
	else
	{
		users.findOne({email: email})
		.then(doc=>{
			if(doc)
				return bcrypt.compare(password, doc.password_hash);
			else throw "Unregistered Email";
		})
		.then(ok=>{
			if(ok)
				return generateAccessToken({username: email});
			else throw "Incorrect Password"
		})
		.then(atoken=>{
			return res.json({token: atoken});
		})
		.catch(err=>{
			console.log(err);
			res.json({error: err})
		})
	}

// { token : "asdasdlkalsdkjalksdjalksdj " }


});


// http://localhost:9000/auth/signup


router.post("/signup", async (req, res)=>{
	//Validate the data.
	const {full_Name, email, password, confirm_password, phone} = req.body;
	// Passwords are matching
	//Email is proper
	//Phone number
	//Insert the table.
	if(!validator.isEmail(email))
	    return res.json({error: "enter correct email"});
	else
	{
		if(!(password===confirm_password))
		    return res.json({error: "re-enter password"});
		else
		{
			if(validator.isMobilePhone(phone.toString()))
			{
				let user = {};
				user.full_name = full_Name;
				user.email = email;
			    hashPassword(password)
				.then((hash)=>{
					user.password_hash=hash;
				    user.phone = Number(phone);
                    user.karma = 0;
                    let userModel = new users(user);
                    userModel.save();
                    res.json(userModel);
					
				})
				
				
			}
			else
			    return res.json({error: "invalid phone number"});			
			
		}	
	}	

	});

module.exports = router;
