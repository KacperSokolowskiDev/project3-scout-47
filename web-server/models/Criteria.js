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
      client_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "clients" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Criteria",
    }
  );
  return Criteria;
};
