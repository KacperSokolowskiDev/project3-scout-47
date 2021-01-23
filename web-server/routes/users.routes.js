const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

// Get all users
router.get("/", usersController.index);

// Get user by id
router.get("/:id", usersController.show);

// Get users by roles
router.get("/search/roles", usersController.showUserByRole);

// Post user
router.post("/", usersController.create);

// Update user by id
router.put("/:id", usersController.update);

// Delete user by id
router.delete("/:id", usersController.destroy);

module.exports = router;
