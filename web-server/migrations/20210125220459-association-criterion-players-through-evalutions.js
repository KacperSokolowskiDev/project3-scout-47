"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("evaluations", "PlayerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "players",
        key: "id",
      },
      onUpdate: "CASCADE",
      OnDelete: "SET NULL",
    });
    await queryInterface.addColumn("evaluations", "CriterionId", {
      type: Sequelize.INTEGER,
      references: {
        model: "criteria",
        key: "id",
      },
      onUpdate: "CASCADE",
      OnDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "evaluations", // name of Source model
      "PlayerId" // key we want to remove
    );
    await queryInterface.removeColumn(
      "evaluations", // name of Source model
      "CriterionId" // key we want to remove
    );
  },
};
