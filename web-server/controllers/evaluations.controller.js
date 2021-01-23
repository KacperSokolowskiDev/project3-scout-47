const { Evaluations } = require("../models");

// Post an evaluation
const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const evaluation = await Evaluations.create(data);
    res.status(200).json(evaluation);
  } catch (error) {
    let message = "Evaluation can't be created";
    res.status(500).json(message);
  }
};

// Post severals evaluations at once
const createMore = async (req, res, next) => {
  const data = req.body;
  console.log("data", data);
  try {
    const evaluations = await Evaluations.bulkCreate(data);
    res.status(200).json(evaluations);
  } catch (error) {
    let message = "Evaluation bulk can't be created";
    res.status(500).json(message);
  }
};

// Get an evaluation by its id
const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const evaluation = await Evaluations.findOne({ where: { id } });
    res.status(200).json(evaluation);
  } catch (error) {
    let message = "Evaluation can't be created";
    res.status(500).json(message);
  }
};

// Get all evaluations
const index = async (req, res, next) => {
  try {
    const listEvaluations = await Evaluations.findAll();
    res.status(200).json(listEvaluations);
  } catch (error) {
    let message = "Evaluations can't be shown";
    res.status(200).json(message);
  }
};

// Update an evaluation
const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let evaluation = await Evaluations.update(data, { where: { id } });
    res.status(200).json(evaluation);
  } catch (error) {
    let message = "Evaluation can't be updated";
    res.status(500).json(message);
  }
};

// Destroy an evaluation
const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let evaluation = await Evaluations.destroy({ where: { id } });
    res.status(200).json(`Evaluation with id : ${id} was deleted`);
  } catch (error) {
    let message = "Evaluation can't DIE";
    res.status(500).json(message);
  }
};

module.exports = {
  create,
  createMore,
  show,
  index,
  update,
  destroy,
};
