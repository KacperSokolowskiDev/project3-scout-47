("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    static associate(models) {
      models.Client.hasMany(Evaluation, { foreignKey: "client_id" });
      models.Scout.hasMany(Evaluation, { foreignKey: "scout_id" });
      models.Player.hasMany(Evaluation, { foreignKey: "player_id" });
      models.Criterias.hasMany(Evaluation, { foreignKey: "criteria_id" });
    }
  }
  Evaluation.init(
    {
      evaluationDate: DataTypes.DATEONLY,
      value: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Evaluation",
    }
  );
  return Evaluation;
};
