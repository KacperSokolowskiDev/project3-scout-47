const express = require("express");
const router = express.Router();

const rolesRoutes = require("./roles.routes");
const formationcenterRoutes = require("./formationcenter.routes");
const usersRoutes = require("./users.routes");
const playersRoutes = require("./players.routes");
const clubsRoutes = require("./clubs.routes");
const criteriasRoutes = require("./criterias.routes");
const evaluationsRoutes = require("./evaluations.routes");
const AgendaEventsRoutes = require("./agendaevent.routes");

router.use("/roles", rolesRoutes);
router.use("/formationcenters", formationcenterRoutes);
router.use("/users", usersRoutes);
router.use("/clubs", clubsRoutes);
router.use("/criterias", criteriasRoutes);
router.use("/players", playersRoutes);
router.use("/evaluations", evaluationsRoutes);
router.use("/agenda/events", AgendaEventsRoutes);

module.exports = router;
