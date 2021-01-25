"use strict";

const { Model, Evaluation, Sequelize } = require("sequelize");
const { findAll } = require("./Criterion");
//const Evaluation = require("./Evaluation");

class Player extends Model {
  static associate({ Evaluation, Criterion }) {
    this.Evaluation = Evaluation;
    this.belongsToManyCriterion = this.belongsToMany(Criterion, {
      through: "Evaluation",
    });
  }

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

  static findAllEvaluations = async (id) => {
    console.log("Findall de model Player", id);
    try {
      console.log("try");
      const result = await this.findAll({
        include: { all: true },
        where: { id },
      });
      console.log(result);
      return result;
    } catch (error) {
      throw new Error(error.toString());
    }
  };
}

module.exports = Player;
