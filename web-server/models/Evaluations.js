"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Evaluations extends Model {
    static associate(models) {
      models.Users.hasMany(Evaluations, { foreignKey: "user_id" });
      models.Criterias.hasMany(Evaluations, { foreignKey: "criteria_id" });
      models.Players.hasMany(Evaluations, { foreignKey: "player_id" });
    }
  }
  Evaluations.init(
    {
      score: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Evaluations",
    }
  );
  return Evaluations;
};
