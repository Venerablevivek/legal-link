const express = require("express");
const router = express.Router();

// import the register controller
const {getAllLawyer, getLawyerProfile, updateLawyerStatus} = require("../Controller/Auth.js");
const {authenticate} = require("../auth/verifyToken.js");
const {VerifyDetails, getAllVerifyDetails, getSingleVerifyDetail} = require("../Controller/Verification.js");


// Routes for controllers
router.get("/get-all",getAllLawyer);
// router.get("/:id", getSingleDoctor);
// router.get("/", getAllDoctor);
// router.put("/update/:id",authenticate, restrict(['doctor']), updateDoctor);
// router.delete("/delete/:id",authenticate, restrict(['doctor']), deleteDoctor);
router.get("/get-all-details",getAllVerifyDetails);
router.get("/get-lawyer-detail/:id",getSingleVerifyDetail);
router.post('/verify-details', VerifyDetails);
router.get('/profile/me',authenticate, getLawyerProfile);
router.put("/update-lawyer-status", updateLawyerStatus);

module.exports = router;