const express = require("express");
const router = express.Router()
const tokenAuth = require("./tokenAuth");

router.use(tokenAuth); //All user management endpoints are token authenticated
//User endpoints
	//Change Password
	//Change email
	//Change phone

module.exports = router;
