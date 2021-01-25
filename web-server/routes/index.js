const express = require("express");
const router = express.Router();

//const AgendaEventsRoutes = require("./agendaevent.routes");
//const clubsRoutes = require("./clubs.routes");
const criteriasRoutes = require("./criteria.routes");
const evaluationsRoutes = require("./evaluations.routes");
const playersRoutes = require("./players.routes");
const PrivilegesRoutes = require("./privileges.routes");
const usersRoutes = require("./users.routes");

// router.use("/agenda/events", AgendaEventsRoutes);
// router.use("/clubs", clubsRoutes);
router.use("/criteria", criteriasRoutes);
router.use("/evaluations", evaluationsRoutes);
router.use("/players", playersRoutes);
router.use("/privileges", PrivilegesRoutes);
router.use("/users", usersRoutes);

module.exports = router;
