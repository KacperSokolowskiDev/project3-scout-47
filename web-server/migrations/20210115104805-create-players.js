"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Players", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birthdate: {
        allowNull: true,
        type: Sequelize.DATEONLY,
      },
      position: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      strongFoot: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
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
      club_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: { tableName: "Clubs" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Players");
  },
};
