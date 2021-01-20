const express = require("express");
const router = express.Router();
const agendaEventController = require("../controllers/agendaevent.controller");

// Get all criterias
router.get("/", agendaEventController.index);

// Get criteria by id
router.get("/:id", agendaEventController.show);

// Get criteria by groupe
router.get("/byScout", agendaEventController.showByScout);

// Post criteria
router.post("/", agendaEventController.create);

// Update criteria by id
router.put("/:id", agendaEventController.update);

// Delete criteria by id
router.delete("/:id", agendaEventController.destroy);

module.exports = router;
