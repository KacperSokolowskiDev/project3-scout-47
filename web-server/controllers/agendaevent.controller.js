const { Sequelize } = require("../config");
const { AgendaEvents } = require("../models");

//Post an event in the agenda
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const event = await AgendaEvents.create(data);
    res.status(200).json(event);
  } catch (error) {
    let message = "Agenda event can't be created";
    res.status(500).json(message);
  }
};

// Get an event in the agenda
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const event = await AgendaEvents.findOne({ where: { id } });
    res.status(200).json(event);
  } catch (error) {
    let message = "agenda event (by id) can't be shown";
    res.status(500).json(message);
  }
};

// Get all events in the agenda of a user
const showByUser = async (req, res, next) => {
  try {
    const event = await AgendaEvents.findAll({
      where: Sequelize.or({ user_id: req.body.user_id }),
    });
    res.status(200).json(event);
  } catch (error) {
    let message = "Events by user can't be shown";
    res.status(500).json(message);
  }
};

// Get all agenda events from Database
const index = async (req, res, next) => {
  try {
    const listEvents = await AgendaEvents.findAll();
    res.status(200).json(listEvents);
  } catch (error) {
    let message = " list of events can't be shown";
    res.status(500).json(message);
    console.error("Unable to fetch:", error);
  }
};

//Update an event of the agenda
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let event = await AgendaEvents.update(data, { where: { id } });
    res.status(200).json(event);
  } catch (error) {
    let message = "Event can't be updated";
    res.status(500).json(message);
  }
};

//Destroy an event in the agenda
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let event = await AgendaEvents.destroy({ where: { id } });
    res.status(200).json(`event with id : ${id} was deleted !`);
  } catch (error) {
    let message = "event can't be destroy";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  show,
  showByUser,
  index,
  update,
  destroy,
};
