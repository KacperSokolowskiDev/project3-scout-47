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
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      birthdate: {
        type: Sequelize.DATE,
      },
      height: {
        type: Sequelize.INTEGER,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      position: {
        type: Sequelize.STRING,
      },
      strongFoot: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: true,
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
      formation_center_id: {
        type: Sequelize.DataTypes.INTEGER,
        reference: { models: { tableName: "FormationCenters" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      club_id: {
        type: Sequelize.DataTypes.INTEGER,
        reference: { models: { tableName: "Clubs" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Players");
  },
};
