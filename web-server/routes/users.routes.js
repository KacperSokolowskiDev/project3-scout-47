const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");
const authController = require("../controllers/auth.controller");

// Create a new users
router.post("/signup", authController.register);

// Update a new users
//router.put("/signup", authController.register);

// Log in as a users
router.post("/login", authController.authenticate);

// Get all users
router.get("/", usersController.index);

// Get user by id
router.get("/:id", usersController.show);

// Get users by roles
//router.get("/search/roles", usersController.indexUsersByRole);

// Post user
router.post("/", usersController.create);

// Update user by id
router.put("/:id", usersController.update);

// Delete user by id
router.delete("/:id", usersController.destroy);

module.exports = router;
