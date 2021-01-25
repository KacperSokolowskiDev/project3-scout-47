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
      score: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATEONLY,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATEONLY,
      },
      criteria_id: {
        type: Sequelize.DataTypes.INTEGER,
        reference: { models: { tableName: "Criterias" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      player_id: {
        type: Sequelize.DataTypes.INTEGER,
        reference: { models: { tableName: "Players" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        reference: { models: { tableName: "Users" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Evaluations");
  },
};
