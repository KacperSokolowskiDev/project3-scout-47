"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Criterias extends Model {
    static associate(models) {
      models.FormationCenters.hasMany(Criterias, {
        foreignKey: "formation_center_id",
      });
    }
  }
  Criterias.init(
    {
      name: DataTypes.STRING,
      groupe: {
        type: DataTypes.ENUM,
        values: ["Physique", "Technique", "Stratégique", "Psychologique"],
      },
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Criterias",
    }
  );
  return Criterias;
};
