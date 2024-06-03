const express = require("express");
const router = express.Router();

// import the register controller
const {register} = require("../Controller/Auth.js");
const {login} = require("../Controller/Auth.js");
const { getLawyer } = require("../Controller/Auth.js");
const {
    resetPasswordToken,
    resetPassword,
} = require('../Controller/ResetPassword.js');


// Routes for controllers
router.post("/register",register);
router.post("/login",login);
//Route for generating a reset password token
router.post('/reset-password-token', resetPasswordToken);

//Route for resetting user's password after verification
router.post('/reset-password', resetPassword);
// router.get('/get-user/:id',getUser);
router.get('/get-lawyer/:id',getLawyer);

module.exports = router;