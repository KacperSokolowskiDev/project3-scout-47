const express = require("express");
const router = express.Router();

const clientsRoutes = require("./clients.routes");
const playersRoutes = require("./players.routes");
const clubsRoutes = require("./clubs.routes");
const scoutsRoutes = require("./scouts.routes");
const criteriasRoutes = require("./criterias.routes");
const evaluationsRoutes = require("./evaluations.routes");
const AgendaEventsRoutes = require("./agendaevent.routes");

router.use("/clients", clientsRoutes);
router.use("/scouts", scoutsRoutes);
router.use("/clubs", clubsRoutes);
router.use("/criterias", criteriasRoutes); //need to adapt it to show it for specific players
router.use("/players", playersRoutes);
router.use("/evaluations", evaluationsRoutes); //need to adapt it to show it for specific players
router.use("/agenda/events", AgendaEventsRoutes);

module.exports = router;
