const express = require("express");
const router = express.Router();
const { createQuery } = require("../../Controller/Query/query");

router.post("/createQuery", createQuery);

module.exports = router;
