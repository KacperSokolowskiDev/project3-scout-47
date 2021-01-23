const express = require("express");
const router = express.Router();
const rolesController = require("../controllers/roles.controller");

// Get all roles
router.get("/", rolesController.index);

// Get role by id
router.get("/:id", rolesController.show);

// Post role
router.post("/", rolesController.create);

// Update role by id
router.put("/:id", rolesController.update);

// Delete role by id
router.delete("/:id", rolesController.destroy);

module.exports = router;
