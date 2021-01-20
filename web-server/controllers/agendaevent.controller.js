const { Sequelize } = require("../config");
const { AgendaEvent } = require("../models");

//Post agenda event in database
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const event = await AgendaEvent.create(data);
    res.status(200).json(event);
  } catch (error) {
    let message = "Agenda event can't be created";
    res.status(500).json(message);
  }
};

// Get agenda event  by id from database
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const event = await AgendaEvent.findOne({ where: { id } });
    res.status(200).json(event);
  } catch (error) {
    let message = "agenda event (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get agenda event  by group
const showByScout = async (req, res, next) => {
  try {
    const event = await AgendaEvent.findAll({
      where: Sequelize.or({ scout_id: req.body.scout_id }),
    });
    res.status(200).json(event);
  } catch (error) {
    let message = "Events by scout can't be shown";
    res.status(500).json(message);
  }
};

// Get agenda event  from Database
const index = async (req, res, next) => {
  try {
    const listEvents = await AgendaEvent.findAll();
    res.status(200).json(listEvents);
  } catch (error) {
    let message = " list of events can't be shown";
    res.status(500).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update agenda event  from database
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let event = await AgendaEvent.update(data, { where: { id } });
    res.status(200).json(event);
  } catch (error) {
    let message = "Event can't be updated";
    res.status(500).json(message);
  }
};

//Destroy agenda event  from database
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let event = await AgendaEvent.destroy({ where: { id } });
    res.status(200).json(`event with id : ${id} was deleted !`);
  } catch (error) {
    let message = "event can't be destroy";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  show,
  showByScout,
  index,
  update,
  destroy,
};
