("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    static associate(models) {
      models.Client.hasMany(Evaluation, { foreignKey: "client_id" });
      models.Scoout.hasMany(Evaluation, { foreignKey: "scout_id" });
      models.Player.hasMany(Evaluation, { foreignKey: "player_id" });
    }
  }
  Evaluation.init(
    {
      evaluationDate: DataTypes.DATE,
      client_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "clients" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      scout_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "scouts" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      player_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "players" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Evaluation",
    }
  );
  return Evaluation;
};
