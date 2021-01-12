("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    static associate(models) {
      models.Client.hasMany(Club, { foreignKey: "client_id" });
    }
  }
  Club.init(
    {
      name: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Club",
    }
  );
  return Club;
};
