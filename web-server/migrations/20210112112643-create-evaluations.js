"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Evaluations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      evaluationDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      client_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: { tableName: "clients" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      scout_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: { tableName: "scouts" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      player_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: { tableName: "players" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Evaluations");
  },
};
