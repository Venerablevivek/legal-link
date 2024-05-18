const express = require("express");
const router = express.Router();

// import the register controller
const {updateUser, updateLawyer, getMyAppointments, getAllReview, createReview} = require("../Controller/Auth.js");
const { authenticate, restrict } = require('../auth/verifyToken.js');


// Routes for controllers
router.put("/update-user", updateUser);
router.put("/update-lawyer", updateLawyer);
router.get("/appointments/my-appointments", authenticate, getMyAppointments);
router.post("/review/create", createReview);
router.get("/review/get-all", getAllReview);

module.exports = router;