const express = require("express");
const router = express.Router();
const tokenAuth = require("./tokenAuth")

router.use(tokenAuth); // All issues endpoints must be authenticated

//issues endpoints;

	//	creating a new issue
	//	back an issue
	//	fund an issue
	//	delete an issue
	//	add media

module.exports = router;
