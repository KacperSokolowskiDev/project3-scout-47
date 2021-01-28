("use strict");
const { Model } = require("sequelize");
// const Sequelize = require("sequelize");

class Privilege extends Model {
  static associate({ User }) {}

  static init(sequelize, DataTypes) {
    return super.init(
      {
        role: {
          allowNull: false,
          type: DataTypes.ENUM,
          values: ["superadmin", "manager", "scout"],
        },
        ageGrade: {
          allowNull: false,
          type: DataTypes.JSON(),
          defaultValue: JSON.stringify([]),
        },
      },
      {
        modelName: "Privilege",
        tableName: "privileges",
        sequelize,
      }
    );
  }
}

module.exports = Privilege;
