const { Sequelize } = require("../config");
const { Player } = require("../models");

// Post player in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const player = await Player.create(data);
    res.status(200).json(player);
  } catch (error) {
    let message = "Player can't be created";
    res.status(500).json(message);
  }
};

// Get player by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const player = await Player.findOne({ where: { id } });
    res.status(200).json(player);
  } catch (error) {
    let message = "Player (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get all players from Database
const index = async (req, res, next) => {
  try {
    const listPlayer = await Player.findAll();
    res.status(200).json(listPlayer);
  } catch (error) {
    let message = "Players can't be shown";
    res.status(200).json(message);
    console.log(error);
  }
};

// Get all players from db with Infinite Scrool
const indexInfinite = async (req, res, next) => {
  console.log(req.query);

  try {
    const listPlayer = await Player.findAll({
      limit: 5,
      offset: parseInt(req.query.offset),
    });
    res.status(200).json(listPlayer);
  } catch (error) {
    let message = "Players (infinite) can't be shown";
    res.status(200).json(message);
    console.log(error);
  }
};

// Get players from a specific data
const searchSpecificPlayer = async (req, res, next) => {
  try {
    const player = await Player.findAll({
      limit: 3,
      where: Sequelize.or(
        { firstname: req.body.firstname },
        { lastname: req.body.lastname }
      ),
    });
    res.status(200).json(player);
  } catch (error) {
    let message = "Player can't be shown";
    res.status(500).json(message);
  }
};

const searchOneSpecificPlayer = async (req, res, next) => {
  try {
    const player = await Player.findOne({
      where: Sequelize.or({ firstname: req.body.firstname }),
    });
    console.log("Firstname", player.firstname);
    res.status(200).json(player);
  } catch (error) {
    let message = "Player with that firstname can't be shown";
    res.status(500).json(message);
  }
};

//Update player from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let player = await Player.update(data, { where: { id } });
    res.status(200).json(player);
  } catch (error) {
    let message = "Player can't be updated";
    res.status(500).json(message);
  }
};

//Destroy player from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let player = await Player.destroy({ where: { id } });
    res.status(200).json(`Player with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Player can't DIE";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  show,
  searchSpecificPlayer,
  searchOneSpecificPlayer,
  index,
  indexInfinite,
  update,
  destroy,
};
