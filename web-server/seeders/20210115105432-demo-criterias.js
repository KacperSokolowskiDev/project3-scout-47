"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Criterias",
      [
        {
          name: "Vitesse",
          groupe: "Physique",
        },
        {
          name: "Endurance",
          groupe: "Physique",
        },
        {
          name: "Dribble",
          groupe: "Technique",
        },
        {
          name: "Motivation",
          groupe: "Psychologique",
        },
        {
          name: "Sprint",
          groupe: "Physique",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Criterias", null, {});
  },
};
