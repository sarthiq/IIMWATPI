const express = require("express");
const router = express.Router();
const interestController = require("../../../Controller/User/Interest/interest");

router.post("/add", interestController.addInterest);
router.get("/get", interestController.getInterest);

module.exports = router;
