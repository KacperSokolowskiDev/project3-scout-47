const express = require("express");
const { isAuthenticated } = require("../controllers/auth.controller");
const router = express.Router();

const criteriasRoutes = require("./criteria.routes");
const evaluationsRoutes = require("./evaluations.routes");
const playersRoutes = require("./players.routes");
const PrivilegesRoutes = require("./privileges.routes");
const usersRoutes = require("./users.routes");
// const uploadRoutes = require("./upload.routes");

router.use('/uploads', express.static('uploads'));

router.use("/criteria", criteriasRoutes);
router.use("/evaluations", evaluationsRoutes);
router.use("/players", isAuthenticated, playersRoutes);
//router.use("/players", playersRoutes);
router.use("/privileges", PrivilegesRoutes);
router.use("/users", usersRoutes);
// router.use("/upload", uploadRoutes);

module.exports = router;
