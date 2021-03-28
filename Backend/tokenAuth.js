require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	if(authHeader)
	{
		const token = authHeader.split(' ')[1];
		if(jwt.verify(token, process.env.TOKEN_SECRET))
			return next();
	}
	return res.json({error: "Improper Authorization header"});
}
