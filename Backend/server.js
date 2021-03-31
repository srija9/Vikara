//imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./auth.js");
const usersRouter = require("./users.js");
const issuesRouter = require("./issues.js");

//constants
const PORT = process.env.PORT || 9000;

//initialization
const app = express();

app.use(cors({origin:process.env.REACT_URL}));

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.json());
//routes

app.get("/", (req,res)=>{
	res.send("<h1>Welcome to Vikara</h1>"); //Test message.
})

app.use("/auth", authRouter); 		//Redirecting auth requests to the auth route handler
app.use("/users", usersRouter);		//Redirecting users requests to the users route handler
app.use("/issues", issuesRouter);	//Redirecting issues requests to the issues route handler.


//start
app.listen(PORT, ()=>{
	console.log("Server up and running on port", PORT);
});
