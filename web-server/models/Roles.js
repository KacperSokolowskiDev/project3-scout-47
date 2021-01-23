"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {}
  }
  Roles.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
