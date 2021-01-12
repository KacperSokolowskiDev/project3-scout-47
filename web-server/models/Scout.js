("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scout extends Model {
    static associate(models) {
      models.Client.hasMany(Scout, { foreignkey: "client_id" });
    }
  }
  Scout.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      telephone: DataTypes.INTEGER,
      picture: DataTypes.STRING,
      client_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "clients" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Scout",
    }
  );
  return Scout;
};
