const express = require("express");
const router = express.Router();
const connection = require("../config");

//GET Requests

router.get("/", (req, res) => {
  connection.query("SELECT * from clubs", (err, results) => {
    if (err) {
      res.status(500).send("Error cant access data");
    } else {
      res.status(200).json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  const idClubs = req.params.id;
  connection.query(
    "SELECT * from clubs WHERE id=?",
    [idClubs],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(`Error cant find club with id -> ${idClubs}`);
      } else {
        res.status(200).json(results);
      }
    }
  );
});

//POST Requests

router.post("/", (req, res) => {
  const { name, year, location } = req.body;
  connection.query(
    "INSERT into clubs (name, year, location) VALUES (?,?,?)",
    [name, year, location],
    (err, results) => {
      if (err) {
        res.status(500).send("Error cant add club to the list");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

//PUT Requests

router.put("/", (req, res) => {
  const idClubs = req.body.id;
  const clubsInfo = req.body;
  connection.query(
    "UPDATE clubs SET ? WHERE id=?",
    [clubsInfo, idClubs],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error cant update club information");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

router.delete("/", (req, res) => {
  const idClubs = req.body.id;
  connection.query(
    "DELETE from clubs WHERE id=?",
    [idClubs],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error cant delete club from list");
      }
    }
  );
});

module.exports = router;
