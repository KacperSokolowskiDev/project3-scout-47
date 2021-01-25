"use strict";

const { Model, Sequelize } = require("sequelize");

class Player extends Model {
  static associate({ Evaluation, Criterion }) {}

  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        position: DataTypes.STRING,
        height: DataTypes.INTEGER,
        weight: DataTypes.INTEGER,
        strongFoot: DataTypes.STRING,
        picture: DataTypes.STRING,
      },
      {
        modelName: "Player",
        tableName: "players",
        sequelize,
      }
    );
  }
}

module.exports = Player;
