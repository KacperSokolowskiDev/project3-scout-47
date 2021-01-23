"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AgendaEvents extends Model {
    static associate(models) {
      models.Users.hasMany(AgendaEvents, { foreignKey: "user_id" });
    }
  }
  AgendaEvents.init(
    {
      description: DataTypes.STRING,
      label: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "AgendaEvents",
    }
  );
  return AgendaEvents;
};
