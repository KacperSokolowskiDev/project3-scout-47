"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
    static associate(models) {
      models.FormationCenters.hasMany(Players, {
        foreignKey: "formation_center_id",
      });
      models.Clubs.hasMany(Players, {
        foreignKey: "club_id",
      });
    }
  }
  Players.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      position: DataTypes.STRING,
      strongFoot: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Players",
    }
  );
  return Players;
};
