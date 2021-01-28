"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("criteria", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      groupe: {
        type: Sequelize.STRING,
      },
      score: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      audio: {
        type: Sequelize.STRING,
      },
      video: {
        type: Sequelize.STRING,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("criteria");
  },
};
