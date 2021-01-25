("use strict");
const { Model } = require("sequelize");

class Evaluation extends Model {
  static associate({ Player, Criterion }) {}

  static init(sequelize, DataTypes) {
    return super.init(
      {
        date: DataTypes.DATE,
        score: DataTypes.INTEGER,
        description: DataTypes.STRING,
        audio: DataTypes.STRING,
        video: DataTypes.STRING,
      },
      {
        modelName: "Evaluation",
        tableName: "evaluations",
        sequelize,
      }
    );
  }
}

module.exports = Evaluation;
