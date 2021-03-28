const express = require("express");
const router = express.Router();
const tokenAuth = require("./tokenAuth")

router.use(tokenAuth); // All issues endpoints must be authenticated

//issues endpoints;

module.exports = router;
