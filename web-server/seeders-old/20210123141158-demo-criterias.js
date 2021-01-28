"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Criterias",
      [
        {
          name: "Vitesse",
          groupe: "Physique",
          score: 2,
          formation_center_id: 1,
        },
        {
          name: "Endurance",
          groupe: "Physique",
          score: 2,
          formation_center_id: 1,
        },
        {
          name: "Dribble",
          groupe: "Technique",
          score: 2,
          formation_center_id: 2,
        },
        {
          name: "Motivation",
          groupe: "Psychologique",
          score: 2,
          formation_center_id: 2,
        },
        {
          name: "Dribble",
          groupe: "Psychologique",
          score: 2,
          formation_center_id: 3,
        },
        {
          name: "Sprint",
          groupe: "Psychologique",
          score: 2,
          formation_center_id: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Criterias", null, {});
  },
};
