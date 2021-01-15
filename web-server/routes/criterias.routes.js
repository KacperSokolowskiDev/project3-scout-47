const express = require("express");
const router = express.Router();
const criteriasController = require("../controllers/criterias.controller");

// Get all criterias
router.get("/", criteriasController.index);

// Get criteria by id
router.get("/:id", criteriasController.show);

// Get criteria by groupe
router.get("/search/groupe", criteriasController.showByGroup);

// Post criteria
router.post("/", criteriasController.create);

// Update criteria by id
router.put("/:id", criteriasController.update);

// Delete criteria by id
router.delete("/:id", criteriasController.destroy);

module.exports = router;
