const { Sequelize } = require("../config");
const { Users } = require("../models");

//Post user in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const user = await Users.create(data);
    res.status(200).json(user);
  } catch (error) {
    let message = "User can't be created";
    res.status(500).json(message);
  }
};

//Get user by id
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await Users.findOne({ where: { id } });
    res.status(200).json(user);
  } catch (error) {
    let message = "User (by id) can't be shown";
    res.status(500).json(message);
  }
};

const showUserByRole = async (req, res, next) => {
  try {
    const users = await Users.findAll({
      where: Sequelize.or({ role_id: req.body.role_id }),
    });
    res.status(200).json(users);
  } catch (error) {
    let message = "Users (by role) can't be shown";
    res.status(500).json(message);
  }
};

// Get Users from Database
const index = async (req, res, next) => {
  try {
    const listUsers = await Users.findAll();
    res.status(200).json(listUsers);
  } catch (error) {
    let message = "Users can't be shown";
    res.status(200).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update user from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let user = await Users.update(data, { where: { id } });
    res.status(200).json(user);
  } catch (error) {
    let message = "User can't be updated";
    res.status(500).json(message);
  }
};

//Destroy user from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let user = await Users.destroy({ where: { id } });
    res.status(200).json(`User with id : ${id} was deleted !`);
  } catch (error) {
    let message = "User can't deleted";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  show,
  showUserByRole,
  index,
  update,
  destroy,
};
