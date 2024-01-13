const express = require("express");
const router = express.Router();

const getData = require("../controllers/Data.controller");

router.get("/", getData);

module.exports = router;