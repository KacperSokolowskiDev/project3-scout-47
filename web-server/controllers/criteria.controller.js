const { Sequelize } = require("../config");
const { Criterion } = require("../models");

//Post criteria in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const criterion = await Criterion.create(data);
    res.status(200).json(criterion);
  } catch (error) {
    let message = "criterion can't be created";
    res.status(500).json(message);
  }
};

// Get criterion by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const criterion = await Criterion.findOne({ where: { id } });
    res.status(200).json(criterion);
  } catch (error) {
    let message = "criterion (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get all criterias by a specific group
const showByGroup = async (req, res, next) => {
  try {
    const criterias = await Criterion.findAll({
      where: Sequelize.or({ groupe: req.body.groupe }),
    });
    res.status(200).json(criterias);
  } catch (error) {
    let message = "Criteria by groupe can't be shown";
    res.status(500).json(message);
  }
};

// Get all criterias from Database
const index = async (req, res, next) => {
  console.log("here in index criteria");
  try {
    const listCriteria = await Criterion.findAll();
    res.status(200).json(listCriteria);
  } catch (error) {
    let message = "criteria can't be shown";
    res.status(500).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update criterion from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let criterion = await Criterion.update(data, { where: { id } });
    res.status(200).json(criterion);
  } catch (error) {
    let message = "Criterion can't be updated";
    res.status(500).json(message);
  }
};

//Destroy criterion from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let criterion = await Criterion.destroy({ where: { id } });
    res.status(200).json(`criteria with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Criterion can't deleted";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  show,
  showByGroup,
  index,
  update,
  destroy,
};
