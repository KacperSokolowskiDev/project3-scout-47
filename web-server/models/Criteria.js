("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Criteria extends Model {
    static associate(models) {
      models.Client.hasMany(Criteria, { foreignKey: " client_id" });
    }
  }
  Criteria.init(
    {
      name: DataTypes.STRING,
      groupe: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Criteria",
    }
  );
  return Criteria;
};
