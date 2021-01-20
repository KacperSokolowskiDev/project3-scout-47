"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Criterias",
      [
        {
          id: 8,
          name: "Vitesse",
          groupe: "Physique",
          score: 5,
        },
        {
          id: 10,
          name: "Endurance",
          groupe: "Physique",
          score: 5,
        },
        {
          id: 12,
          name: "Dribble",
          groupe: "Technique",
          score: 5,
        },
        {
          id: 14,
          name: "Motivation",
          groupe: "Psychologique",
          score: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Criterias", null, {});
  },
};
