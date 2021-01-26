const { Privilege, User } = require("../models");

// Post a Privileges in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const privilege = await Privilege.create(data);
    res.status(200).json(privilege);
  } catch (error) {
    let message = "Privilege can't be created";
    res.status(500).json(message);
  }
};

// Get a privileges in database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const privilege = await Privilege.findOne({ where: { id } });
    res.status(200).json(privilege);
  } catch (error) {
    let message = "Privilege (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get all privilege from Database
const index = async (req, res, next) => {
  console.log("dans l'index", req.params.role);
  if (req.params.role) {
    return next();
  }
  try {
    const listPrivileges = await Privilege.findAll();
    res.status(200).json(listPrivileges);
  } catch (error) {
    let message = "List privileges can't be shown";
    res.status(500).json(message);
    console.error("Unable to fetch:", error);
  }
};

// Get all user with a specific role
const indexByUsersRole = async (req, res, next) => {
  console.log("dans indexByUserRole");
  try {
    const users = await User.findAllScouts(req.params.Privilege.role);
    res.status(200).json(users);
  } catch (error) {
    let message = "Users (by role) can't be shown";
    res.status(500).json(error);
  }
};

//Update Privilege from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let privilege = await Privilege.update(data, { where: { id } });
    res.status(200).json(privilege);
  } catch (error) {
    let message = "Privilege can't be updated";
    res.status(500).json(message);
  }
};

//Destroy Privilege from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let privilege = await Privilege.destroy({ where: { id } });
    res.status(200).json(`Privilege with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Privilege can't be deleted";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  show,
  index,
  indexByUsersRole,
  update,
  destroy,
};
