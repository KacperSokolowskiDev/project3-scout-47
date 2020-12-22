const express = require("express");
const router = express.Router();
const playersController = require("../controllers/players.controller");

// Get all players
router.get("/", playersController.index);

// Get player by id
router.get("/:id", playersController.show);

// Post player
router.post("/", playersController.create);

// Update player by id
router.put("/:id", playersController.update);

// Delete player by id
router.delete("/:id", playersController.destroy);

module.exports = router;
