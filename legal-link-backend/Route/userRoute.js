const express = require("express");
const router = express.Router();

// import the register controller
const {updateUser, updateLawyer, getMyAppointments} = require("../Controller/Auth.js");
const { authenticate, restrict } = require('../auth/verifyToken.js');


// Routes for controllers
router.put("/update-user",authenticate, updateUser);
router.put("/update-lawyer",authenticate, updateLawyer);
router.get("/appointments/my-appointments", authenticate, getMyAppointments);

module.exports = router;