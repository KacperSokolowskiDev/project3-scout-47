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
        telephone: DataTypes.INTEGER,
      },
      {
        modelName: "User",
        tableName: "users",
        sequelize,
      }
    );
  }

  static findAllScouts = async (role) => {
    console.log("FIndAllScout", role);
    try {
      console.log("try");
      const result = await this.findAll({
        include: { all: true },
        where: { role },
      });
      return result;
    } catch (error) {
      throw new Error(error.toString());
    }
  };
}

module.exports = User;
