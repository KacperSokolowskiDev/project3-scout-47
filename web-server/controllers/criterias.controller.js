const { Sequelize } = require("../config");
const { Criterias } = require("../models");

//Post criteria in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const criteria = await Criterias.create(data);
    res.status(200).json(criteria);
  } catch (error) {
    let message = "criteria can't be created";
    res.status(500).json(message);
  }
};

// Get criteria by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const criteria = await Criterias.findOne({ where: { id } });
    res.status(200).json(criteria);
  } catch (error) {
    let message = "criteria (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get criterias by group
const showByGroup = async (req, res, next) => {
  try {
    const criterias = await Criterias.findAll({
      where: Sequelize.or({ groupe: req.body.groupe }),
    });
    res.status(200).json(criterias);
  } catch (error) {
    let message = "Criterias by groupe can't be shown";
    res.status(500).json(message);
  }
};

// Get criterias from Database
const index = async (req, res, next) => {
  try {
    const listCriteria = await Criterias.findAll();
    res.status(200).json(listCriteria);
  } catch (error) {
    let message = "criteria can't be shown";
    res.status(500).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update criteria from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let criteria = await Criterias.update(data, { where: { id } });
    res.status(200).json(criteria);
  } catch (error) {
    let message = "criteria can't be updated";
    res.status(500).json(message);
  }
};

//Destroy criteria from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let criteria = await Criterias.destroy({ where: { id } });
    res.status(200).json(`criteria with id : ${id} was deleted !`);
  } catch (error) {
    let message = "criteria can't DIE";
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
