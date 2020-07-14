const burger = require('../models/burger');
const router = require('express').Router();



// var express = require("express");

// var router = express.Router();

// // Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async function(req, res) {
  const allBurgers = await burger.get();
  var hbsObject = {
    burgers: allBurgers
  };
  
  res.render("index", hbsObject);
});

router.post("/api/burgers", async function(req, res) {
  const newBurger = await burger.create(req.body.burger_name);

  res.json({id:newBurger.insertId})

});

router.put("/api/burgers/:id", async function(req, res) {

  await burger.devour(req.params.id);

  res.status(200).end();

});

// Export routes for server.js to use.
module.exports = router;
