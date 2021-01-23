const { Clubs } = require("../models");

//Post club in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const club = await Clubs.create(data);
    res.status(200).json(club);
  } catch (error) {
    let message = "Club can't be created";
    res.status(500).json(message);
  }
};

//Get club by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const club = await Clubs.findOne({ where: { id } });
    res.status(200).json(club);
  } catch (error) {
    let message = "Club (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get clubs from Database
const index = async (req, res, next) => {
  try {
    const listClubs = await Clubs.findAll();
    res.status(200).json(listClubs);
  } catch (error) {
    let message = "Clubs can't be shown";
    res.status(200).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update club from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let club = await Clubs.update(data, { where: { id } });
    res.status(200).json(club);
  } catch (error) {
    let message = "Club can't be updated";
    res.status(500).json(message);
  }
};

//Destroy club from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let club = await Clubs.destroy({ where: { id } });
    res.status(200).json(`Club with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Club can't deleted";
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
