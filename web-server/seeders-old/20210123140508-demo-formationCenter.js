"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "FormationCenters",
      [
        {
          name: "FC Polska",
          address: "Rue abc",
        },
        {
          name: "Inter Casa Blanca",
          address: "Rue mnop",
        },
        {
          name: "Pakital",
          address: "Rue xyz",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("FormationCenters", null, {});
  },
};
