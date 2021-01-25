"use strict";
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const Criterion = require("./Criterion");
const Evaluation = require("./Evaluation");
const Player = require("./Player");
const Privilege = require("./Privilege");
const User = require("./User");

// Get all models inside a unique object
const models = {
  Criterion: Criterion.init(sequelize, Sequelize),
  Evaluation: Evaluation.init(sequelize, Sequelize),
  User: User.init(sequelize, Sequelize),
  Privilege: Privilege.init(sequelize, Sequelize),
  Player: Player.init(sequelize, Sequelize),
};

Object.values(models)
  .filter((model) => typeof model.associate === "function") // Allow to get all function from a model
  .forEach((model) => model.associate(models)); // Allow to associate each model to what it should

const db = {
  ...models,
  sequelize,
};

module.exports = db;
