const express = require("express");
const router = express.Router();

// import the register controller
const {register} = require("../Controller/Auth.js");
const {login} = require("../Controller/Auth.js");
const { getLawyer } = require("../Controller/Auth.js");


// Routes for controllers
router.post("/register",register);
router.post("/login",login);
// router.get('/get-user/:id',getUser);
router.get('/get-lawyer/:id',getLawyer);

module.exports = router;