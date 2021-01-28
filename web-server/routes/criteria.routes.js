const express = require("express");
const router = express.Router();
const criteriaController = require("../controllers/criteria.controller");

// Get all criteria
router.get("/", criteriaController.index);

// Get criteria by id
router.get("/:id", criteriaController.show);

// Get criteria by groupe
router.get("/search/groupe", criteriaController.showByGroup);

// Post criteria
router.post("/", criteriaController.create);

// Update criteria by id
router.put("/:id", criteriaController.update);

// Delete criteria by id
router.delete("/:id", criteriaController.destroy);

module.exports = router;
