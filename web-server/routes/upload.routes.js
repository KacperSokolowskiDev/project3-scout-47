const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload.controller");

router.put("/", uploadController.uploadCertificate);

module.exports = router;
