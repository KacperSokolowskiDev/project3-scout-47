"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "criteria",
      [
        {
          name: "Vitesse",
          groupe: "Physique",
          maxScore: 2,
        },
        {
          name: "Endurance",
          groupe: "Physique",
          maxScore: 2,
        },
        {
          name: "Dribble",
          groupe: "Technique",
          maxScore: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("criteria", null, {});
  },
};
