const express = require("express");
const router = express.Router();
const clubsController = require("../controllers/clubs.controller");

// Get all clubs
router.get("/", clubsController.index);

// Get club by id
router.get("/:id", clubsController.show);

// Post club
router.post("/", clubsController.create);

// Update club by id
router.put("/:id", clubsController.update);

// Delete club by id
router.delete("/:id", clubsController.destroy);

module.exports = router;
