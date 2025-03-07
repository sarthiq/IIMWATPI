const express = require("express");

const authController = require("../../../Controller/Admin/Auth/auth");

const router = express.Router();

router.post("/login", authController.adminLogin);

module.exports = router;
