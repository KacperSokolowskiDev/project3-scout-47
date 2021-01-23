"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Evaluations",
      [
        {
          criteria_id: 1,
          player_id: 4,
          user_id: 3,
          score: 5,
          date: "2021-02-01",
        },
        {
          criteria_id: 3,
          player_id: 6,
          user_id: 5,
          score: 5,
          date: "2021-02-02",
        },
        {
          criteria_id: 5,
          player_id: 9,
          user_id: 8,
          score: 8,
          date: "2021-02-03",
        },
        {
          criteria_id: 6,
          player_id: 9,
          user_id: 8,
          score: 8,
          date: "2021-03-03",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Evaluations");
  },
};
