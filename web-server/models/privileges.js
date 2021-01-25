"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Privileges extends Model {
    static associate(models) {}
  }
  Privileges.init(
    {
      role: {
        type: DataTypes.ENUM,
        values: ["root", "manager", "scout"],
      },
      ageGrade: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Privileges",
    }
  );
  return Privileges;
};
