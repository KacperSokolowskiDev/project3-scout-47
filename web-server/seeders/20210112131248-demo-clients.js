"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Clients",
      [
        {
          name: "FC Brussels",
        },
        {
          name: "Inter Namur",
        },
        {
          name: "AC Anterwerpen ",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Clients", null, {});
  },
};
