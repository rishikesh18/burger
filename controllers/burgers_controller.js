var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var cat = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
});



// Export routes for server.js to use.
module.exports = router;
