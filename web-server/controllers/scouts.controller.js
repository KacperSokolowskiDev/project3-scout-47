const Scout = require("../models/Scouts");

//Post scout in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const scout = await Scout.create(data);
    res.status(200).json(scout);
  } catch (error) {
    let message = "Scout can't be created";
    res.status(500).json(message);
  }
};

//Get scout by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const scout = await Scout.findOne({ where: { id } });
    res.status(200).json(scout);
  } catch (error) {
    let message = "Scout (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get scouts from Database
const index = async (req, res, next) => {
  try {
    const listScouts = await Scout.findAll();
    res.status(200).json(listScouts);
  } catch (error) {
    let message = "Scouts can't be shown";
    res.status(200).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update scout from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let scout = await Scout.update(data, { where: { id } });
    res.status(200).json(scout);
  } catch (error) {
    let message = "Scout can't be updated";
    res.status(500).json(message);
  }
};

//Destroy player from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let scout = await Scout.destroy({ where: { id } });
    res.status(200).json(`Scout with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Scout can't DIE";
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
