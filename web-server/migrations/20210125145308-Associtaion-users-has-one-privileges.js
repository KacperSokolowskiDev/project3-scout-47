"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "privileges", // name of Source model (name of table ?)
      "UserId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "users", // name of Target model (name of table ?)
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      "privileges", // name of Source model
      "UserId" // key we want to remove
    );
  },
};
