("use strict");
const { Model } = require("sequelize");

class Criterion extends Model {
  static associate({ Player, Evaluation }) {}

  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING,
        groupe: DataTypes.STRING,
        score: DataTypes.INTEGER,
      },
      {
        modelName: "Criterion",
        tableName: "criteria",
        sequelize,
      }
    );
  }
}

module.exports = Criterion;
