const express = require("express");
const router = express.Router({ mergeParams: true });
const playersController = require("../controllers/players.controller");
const evaluationsRoutes = require("./evaluations.routes");
router.use("/:PlayerId/evaluations", evaluationsRoutes);

// Get all players
router.get("/", playersController.index);

// Get all players with infinite scroll
router.get("/infinite", playersController.indexInfinite);

// Get player by id
router.get("/:id", playersController.show);

// Get player by name from body
router.get("/search/player", playersController.searchSpecificPlayer);

// Get player by firstname only
router.get(
  "/search/player/firstname",
  playersController.searchOneSpecificPlayer
);
// Post player
router.post("/", playersController.create);

// Update player by id
router.put("/:id", playersController.update);

// Delete player by id
router.delete("/:id", playersController.destroy);

module.exports = router;
