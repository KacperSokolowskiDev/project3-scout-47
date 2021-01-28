("use strict");
const { Model } = require("sequelize");

class Criterion extends Model {
  static associate({ Player, Evaluation }) {
    this.belongsToManyPlayer = this.belongsToMany(Player, {
      through: Evaluation,
    });
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: DataTypes.STRING,
        groupe: DataTypes.STRING,
        score: DataTypes.INTEGER,
        description: DataTypes.STRING,
        audio: DataTypes.STRING,
        video: DataTypes.STRING,
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
