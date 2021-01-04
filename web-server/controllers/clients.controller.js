const Client = require("../models/Clients");

//Post client in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const client = await Client.create(data);
    res.status(200).json(client);
  } catch (error) {
    let message = "Client can't be created";
    res.status(500).json(message);
  }
};

//Get client by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const client = await Client.findOne({ where: { id } });
    res.status(200).json(client);
  } catch (error) {
    let message = "Client (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get clients from Database
const index = async (req, res, next) => {
  try {
    const listClients = await Client.findAll();
    res.status(200).json(listClients);
  } catch (error) {
    let message = "Clients can't be shown";
    res.status(200).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update player from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let client = await Client.update(data, { where: { id } });
    res.status(200).json(client);
  } catch (error) {
    let message = "Client can't be updated";
    res.status(500).json(message);
  }
};

//Destroy player from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let client = await Client.destroy({ where: { id } });
    res.status(200).json(`Client with id : ${id} was deleted !`);
  } catch (error) {
    let message = "Client can't DIE";
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
