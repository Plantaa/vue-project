const express = require("express");

const router = express.Router();

const {
    getHealth,
} = require("../controllers/Health.controller");

router.get("/health", getHealth);

module.exports = router;