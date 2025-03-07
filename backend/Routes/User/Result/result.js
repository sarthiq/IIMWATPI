const express = require("express");
const { getUserResult } = require("../../../Controller/User/Result/result");
const router = express.Router();

router.get("/getUserResult", getUserResult);

module.exports = router;
