("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
      models.Client.hasMany(Player, { foreignKey: "client_id " });
      models.Scout.hasMany(Player, { foreignKey: "scout_id" });
      models.Club.hasMany(Player, { foreignKey: "club_id" });
    }
  }
  Player.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      position: DataTypes.STRING,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      strongFoot: DataTypes.STRING,
      picture: DataTypes.STRING,
      client_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "clients" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      scout_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "scouts" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      club_id: {
        type: DataTypes.INTEGER,
        references: { model: { tableName: "clubs" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Player",
    }
  );
  return Player;
};
