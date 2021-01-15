("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Criterias extends Model {
    static associate(models) {
      models.Client.hasMany(Criterias, { foreignKey: "client_id" });
    }
  }
  Criterias.init(
    {
      name: DataTypes.STRING,
      groupe: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Criterias",
    }
  );
  return Criterias;
};
