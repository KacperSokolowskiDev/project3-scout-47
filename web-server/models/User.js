"use strict";
const { Model } = require("sequelize");

class User extends Model {
  static associate({ Privilege }) {
    this.hasOnePrivilege = this.hasOne(Privilege);
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        modelName: "User",
        tableName: "users",
        sequelize,
      }
    );
  }
}

module.exports = User;
