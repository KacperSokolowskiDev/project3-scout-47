const express = require("express");
const router = express.Router();
const privilegesController = require("../controllers/privileges.controller");

// Get all roles
router.get(
  "/",
  privilegesController.index,
  privilegesController.indexByUsersRole
);

// Get role by id
router.get("/:id", privilegesController.show);

// Post role
router.post("/", privilegesController.create);

// Update role by id
router.put("/:id", privilegesController.update);

// Delete role by id
router.delete("/:id", privilegesController.destroy);

module.exports = router;
