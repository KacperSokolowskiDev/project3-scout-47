const { Roles } = require("../models");

// Post role in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const role = await Roles.create(data);
    res.status(200).json(role);
  } catch (error) {
    let message = "Role can't be created";
    res.status(500).json(message);
  }
};

//Get role by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const role = await Roles.findOne({ where: { id } });
    res.status(200).json(role);
  } catch (error) {
    let message = "Role (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get all roles from Database
const index = async (req, res, next) => {
  try {
    const listRoles = await Roles.findAll();
    res.status(200).json(listRoles);
  } catch (error) {
    let message = "list of roles can't be shown";
    res.status(200).json(message);
  }
};

//Update role from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let role = await Roles.update(data, { where: { id } });
    res.status(200).json(role);
  } catch (error) {
    let message = "Role can't be updated";
    res.status(500).json(message);
  }
};

//Destroy role from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let role = await Roles.destroy({ where: { id } });
    res.status(200).json(`Role with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Role can't deleted";
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
