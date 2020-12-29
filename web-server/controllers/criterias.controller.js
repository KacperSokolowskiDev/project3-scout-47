const Criteria = require("../models/Criterias");

//Post criteria in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const criteria = await Criteria.create(data);
    res.status(200).json(criteria);
  } catch (error) {
    let message = "Criteria can't be created";
    res.status(500).json(message);
  }
};

//Get criteria by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const criteria = await Criteria.findOne({ where: { id } });
    res.status(200).json(criteria);
  } catch (error) {
    let message = "Criteria (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get criterias from Database
const index = async (req, res, next) => {
  try {
    const listCriteria = await Criteria.findAll();
    res.status(200).json(listCriteria);
  } catch (error) {
    let message = "Criterias can't be shown";
    res.status(500).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update criteria from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let criteria = await Criteria.update(data, { where: { id } });
    res.status(200).json(criteria);
  } catch (error) {
    let message = "Criteria can't be updated";
    res.status(500).json(message);
  }
};

//Destroy criteria from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let criteria = await Criteria.destroy({ where: { id } });
    res.status(200).json(`Criteria with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Criteria can't DIE";
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
