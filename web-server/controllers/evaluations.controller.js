const Evaluation = require("../models/Evaluations");

const create = async (req, res, next) => {
  const data = { ...req.body };
  try {
    const evaluation = await Evaluation.create(data);
    res.status(200).json(evaluation);
  } catch (error) {
    let message = "Evaluation can't be created";
    res.status(500).json(message);
  }
};

const show = async (req, res, next) => {
  const { id } = req.params;
  try {
    const evaluation = await Evaluation.findOne({ where: { id } });
    res.status(200).json(evaluation);
  } catch (error) {
    let message = "Evaluation can't be created";
    res.status(500).json(message);
  }
};

const index = async (req, res, next) => {
  try {
    const listEvaluations = await Evaluation.findAll();
    res.status(200).json(listEvaluations);
  } catch (error) {
    let message = "Evaluations can't be shown";
    res.status(200).json(message);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const data = { ...req.body };
  try {
    let evaluation = await Evaluation.update(data, { where: { id } });
    res.status(200).json(evaluation);
  } catch (error) {
    let message = "Evaluation can't be updated";
    res.status(500).json(message);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    let evaluation = await Evaluation.destroy({ where: { id } });
    res.status(200).json(`Evaluation with id : ${id} was deleted`);
  } catch (error) {
    let message = "Evaluation can't DIE";
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
