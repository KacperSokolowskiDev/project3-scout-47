"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AgendaEvent extends Model {
    static associate(models) {
      models.Scout.hasMany(AgendaEvent, { foreignKey: "scout_id" });
      models.Client.hasMany(AgendaEvent, { foreignKey: "client_id" });
    }
  }
  AgendaEvent.init(
    {
      label: DataTypes.STRING,
      time: DataTypes.TIME,
      date: DataTypes.DATE,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AgendaEvent",
    }
  );
  return AgendaEvent;
};
