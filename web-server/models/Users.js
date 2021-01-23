"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      models.Roles.hasMany(Users, { foreignKey: "role_id" });
      models.FormationCenters.hasMany(Users, {
        foreignKey: "formation_center_id",
      });
    }
  }
  Users.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      yearCategory: {
        type: DataTypes.ENUM,
        values: ["2008", "2009", "2010"],
      },
      telephone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
