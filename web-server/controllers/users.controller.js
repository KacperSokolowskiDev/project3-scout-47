const { Sequelize } = require("../config");
const { Privilege, User } = require("../models");

//Post user in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  console.log("data in create user", data);
  try {
    const user = await User.create({ ...data }, { include: [Privilege] });
    res.status(200).json(user);
  } catch (error) {
    let message = "User can't be created";
    res.status(500).json(message);
  }
};

//Get user by id
const show = async (req, res, next) => {
  console.log("dans user by id");
  const { id } = req.params;
  console.log("idddd ", id);
  try {
    const user = await User.findOne({ include: Privilege, where: { id } });
    res.status(200).json(user);
  } catch (error) {
    let message = "User (by id) can't be shown";
    res.status(500).json(error.toString());
  }
};

// const indexUsersByRole = async (req, res, next) => {
//   console.log("req.body", req.body);
//   try {
//     const users = await User.findAll(
//       { include: Roles },
//       {
//         where: { role_id },
//       }
//     );
//     res.status(200).json(users);
//   } catch (error) {
//     let message = "Users (by role) can't be shown";
//     res.status(500).json(error);
//   }
// };

// Get Users from Database
const index = async (req, res, next) => {
  try {
    const listUsers = await User.findAll();
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
    let user = await User.update(data, { where: { id } });
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
    let user = await User.destroy({ where: { id } });
    res.status(200).json(`User with id : ${id} was deleted !`);
  } catch (error) {
    let message = "User can't deleted";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  show,
  //indexUsersByRole,
  index,
  update,
  destroy,
};
