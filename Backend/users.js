const express = require("express");
const router = express.Router()
const tokenAuth = require("./tokenAuth");

router.use(tokenAuth); //All user management endpoints are token authenticated
//User endpoints

	//Change Password
	//Change email
	//Change phone

router.post("/changeEmail", (req, res)=>{

	res.json({
		
		whichUser: req.user.username,
		newEmail: req.body.newEmail
	});
})


module.exports = router;
