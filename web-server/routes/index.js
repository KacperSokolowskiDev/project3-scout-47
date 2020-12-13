const express = require("express");
const router = express.Router();

const playersRoutes = require("./players.routes");
const clubsRoutes = require("./clubs.routes");

router.use("/players", playersRoutes);
router.use("/clubs", clubsRoutes);

module.exports = router;
