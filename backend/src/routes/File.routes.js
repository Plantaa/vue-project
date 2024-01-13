const express = require("express");
const multer = require("multer");

const router = express.Router();
var upload = multer();

const {
    getFiles,
    uploadFile,
} = require("../controllers/File.controller");

router.get("/", getFiles);
router.post("/", upload.single("file.txt"), uploadFile);

module.exports = router;