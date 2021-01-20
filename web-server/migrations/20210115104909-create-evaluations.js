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
      createdAt: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: new Date(),
      },
      evaluationDate: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: new Date(),
      },
      value: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      client_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: { tableName: "Clients" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      scout_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: { tableName: "Scouts" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      player_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: { tableName: "Players" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      criteria_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: { tableName: "Criterias" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Evaluations");
  },
};

// {
//   "id": 5,
//   "criteria_id":5,
//   "value":8,
//   "createdAt": "2021-01-19",
//   "updatedAt": "2021-01-19",
//   "evaluationDate": "2021-01-19"
// }
