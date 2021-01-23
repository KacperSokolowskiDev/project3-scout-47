const express = require("express");
const router = express.Router();
const agendaEventController = require("../controllers/agendaevent.controller");

// Get all agenda events
router.get("/", agendaEventController.index);

// Get agenda event by id
router.get("/:id", agendaEventController.show);

// Get agenda events for a user
router.get("/byUser", agendaEventController.showByUser);

// Post agenda events
router.post("/", agendaEventController.create);

// Update an agenda events
router.put("/:id", agendaEventController.update);

// Delete an agenda events
router.delete("/:id", agendaEventController.destroy);

module.exports = router;
