const express = require("express");
const router = express.Router();
const scoutsController = require("../controllers/scouts.controller");

// Get all scouts
router.get("/", scoutsController.index);

// Get scout by id
router.get("/:id", scoutsController.show);

// Post scout
router.post("/", scoutsController.create);

// Update scout by id
router.put("/:id", scoutsController.update);

// Delete scout by id
router.delete("/:id", scoutsController.destroy);

module.exports = router;
