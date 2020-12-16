const Players = require("../models/Players");

const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    let player = await Players.save(data);
    res.status(200).json(player);
  } catch (error) {
    let message = "Player can't be created";
    res.status(500).json(message);
  }
};

const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    let player = await Players.findById(id);
    res.status(200).json(player);
  } catch (error) {
    let message = "Player (by id) can't be shown";
    res.status(500).json(message);
  }
};

const index = async (req, res, next) => {
  try {
    let players = await Players.findAll();
    res.status(200).json(players);
  } catch (error) {
    let message = "Players can't be shown";
    res.status(500).json(message);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let player = await Players.updateById(parseInt(id), data);
    res.status(200).json(player);
  } catch (error) {
    let message = "Player can't be updated";
    res.status(500).json(message);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let player = await Players.deleteById(id);
    res.status(200).json(player);
  } catch (error) {
    let message = "Player can't DIE";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  show,
  index,
  update,
  destroy,
};
