"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "evaluations",
      [
        {
          score: 8,
          description: "Très bien",
          date: "2021-02-11",
          PlayerId: 1,
          CriterionId: 1,
        },
        {
          score: 9,
          description: "Excellent",
          date: "2021-02-11",
          PlayerId: 1,
          CriterionId: 2,
        },
        {
          score: 7,
          description: "Bien",
          date: "2021-02-11",
          PlayerId: 2,
          CriterionId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("evaluations", null, {});
  },
};
