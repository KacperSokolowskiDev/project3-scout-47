const express = require("express");
const router = express.Router({ mergeParams: true });
const evaluationsController = require("../controllers/evaluations.controller");

// Get all evaluations
router.get(
  "/",
  evaluationsController.index,
  evaluationsController.indexByPlayer
);

// Get evaluation by id
router.get("/:id", evaluationsController.show);

// Post evaluation
router.post("/", evaluationsController.create);

// Post evalutaion
router.post("/all", evaluationsController.createMore);

// Update evaluation by id
router.put("/:id", evaluationsController.update);

// Delete evaluation by id
router.delete("/:id", evaluationsController.destroy);

module.exports = router;
