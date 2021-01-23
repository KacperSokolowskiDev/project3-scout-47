const express = require("express");
const router = express.Router();
const formationCenterController = require("../controllers/formationcenter.controller");

// Get all formation centers
router.get("/", formationCenterController.index);

// Get formation center by id
router.get("/:id", formationCenterController.show);

// Post formation center
router.post("/", formationCenterController.create);

// Update formation center by id
router.put("/:id", formationCenterController.update);

// Delete formation center by id
router.delete("/:id", formationCenterController.destroy);

module.exports = router;
