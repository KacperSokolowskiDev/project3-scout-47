"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FormationCenters extends Model {
    static associate(models) {}
  }
  FormationCenters.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "FormationCenters",
    }
  );
  return FormationCenters;
};
