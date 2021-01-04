const express = require("express");
const router = express.Router();
const clientsController = require("../controllers/clients.controller");

// Get all clients
router.get("/", clientsController.index);

// Get client by id
router.get("/:id", clientsController.show);

// Post client
router.post("/", clientsController.create);

// Update client by id
router.put("/:id", clientsController.update);

// Delete client by id
router.delete("/:id", clientsController.destroy);

module.exports = router;
