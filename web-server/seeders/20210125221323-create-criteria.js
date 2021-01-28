"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "criteria",
      [
        {
          name: "Vitesse",
          groupe: "Physique",
          score: 2,
          description: "",
          audio: "",
          video: "",
        },
        {
          name: "Endurance",
          groupe: "Physique",
          score: 2,
          description: "",
          audio: "",
          video: "",
        },
        {
          name: "Dribble",
          groupe: "Technique",
          score: 2,
        },
        {
          name: "Position",
          groupe: "Stratégique",
          score: 2,
          description: "",
          audio: "",
          video: "",
        },
        {
          name: "Motivation",
          groupe: "Psychologique",
          score: 2,
          description: "",
          audio: "",
          video: "",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("criteria", null, {});
  },
};
