const { FormationCenters } = require("../models");

// Post formation center in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const formationcenter = await FormationCenters.create(data);
    res.status(200).json(formationcenter);
  } catch (error) {
    let message = "Formation center can't be created";
    res.status(500).json(message);
  }
};

//Get formation center by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const formationcenter = await FormationCenters.findOne({ where: { id } });
    res.status(200).json(formationcenter);
  } catch (error) {
    let message = "formationcenter (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get all formation centers from Database
const index = async (req, res, next) => {
  try {
    const listFormationCenter = await FormationCenters.findAll();
    res.status(200).json(listFormationCenter);
  } catch (error) {
    let message = "list of formation centers can't be shown";
    res.status(200).json(message);
  }
};

//Update formation center from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let formationcenter = await FormationCenters.update(data, {
      where: { id },
    });
    res.status(200).json(formationcenter);
  } catch (error) {
    let message = "Formation center can't be updated";
    res.status(500).json(message);
  }
};

//Destroy formation center from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let formationcenter = await FormationCenters.destroy({ where: { id } });
    res.status(200).json(`Formation center with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Formation center can't deleted";
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
