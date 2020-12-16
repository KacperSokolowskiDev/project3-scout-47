const express = require("express");
const router = express.Router();
const connection = require("../config");
const playersController = require("../controllers/players.controller");

// Get all players
router.get("/", playersController.index);

// Get player by id
router.get("/:id", playersController.show);

// Post player
router.post("/", playersController.create);

// Update player by id
router.put("/:id", playersController.update);

// Delete player by id
router.delete("/:id", playersController.destroy);

// router.get("/", (req, res) => {
//   connection.query("SELECT * from players", (err, results) => {
//     if (err) {
//       res.status(500).send("Error cant access data");
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// router.get("/:id", (req, res) => {
//   const idPlayers = req.params.id;
//   connection.query(
//     "SELECT * from players WHERE id=?",
//     [idPlayers],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send(`Error cant find player with id -> ${idPlayers}`);
//       } else {
//         res.status(200).json(results);
//       }
//     }
//   );
// });

// //POST Requests

// router.post("/", (req, res) => {
//   const { firstname, lastname, club, strongFoot } = req.body;
//   connection.query(
//     "INSERT into players (firstname, lastname, club, strongFoot) VALUES (?,?,?,?)",
//     [firstname, lastname, club, strongFoot],
//     (err, results) => {
//       if (err) {
//         res.status(500).send("Error cant add player to the list");
//       } else {
//         res.status(200).json(results);
//       }
//     }
//   );
// });

// //PUT Requests

// router.put("/", (req, res) => {
//   const idPlayers = req.body.id;
//   const playersInfo = req.body;
//   connection.query(
//     "UPDATE players SET ? WHERE id=?",
//     [playersInfo, idPlayers],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error cant update player information");
//       } else {
//         res.status(200).json(results);
//       }
//     }
//   );
// });

// router.delete("/", (req, res) => {
//   const idPlayers = req.body.id;
//   connection.query(
//     "DELETE from players WHERE id=?",
//     [idPlayers],
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error cant delete player from list");
//       }
//     }
//   );
// });

module.exports = router;
