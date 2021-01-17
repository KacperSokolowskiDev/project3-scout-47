("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scout extends Model {
    static associate(models) {
      models.Client.hasMany(Scout, { foreignKey: "client_id" });
    }
  }
  Scout.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      telephone: DataTypes.INTEGER,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Scout",
    }
  );
  return Scout;
};
