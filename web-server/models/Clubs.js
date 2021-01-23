"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clubs extends Model {
    static associate(models) {
      models.FormationCenters.hasMany(Clubs, {
        foreignKey: "formation_center_id",
      });
    }
  }
  Clubs.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      telephone: DataTypes.INTEGER,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Clubs",
    }
  );
  return Clubs;
};
