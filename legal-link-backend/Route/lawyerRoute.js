const express = require("express");
const router = express.Router();

// import the register controller
const {getAllLawyer, getLawyerProfile} = require("../Controller/Auth.js");
const {authenticate} = require("../auth/verifyToken.js");


// Routes for controllers
router.get("/get-all",getAllLawyer);
// router.get("/:id", getSingleDoctor);
// router.get("/", getAllDoctor);
// router.put("/update/:id",authenticate, restrict(['doctor']), updateDoctor);
// router.delete("/delete/:id",authenticate, restrict(['doctor']), deleteDoctor);

router.get('/profile/me',authenticate, getLawyerProfile);

module.exports = router;