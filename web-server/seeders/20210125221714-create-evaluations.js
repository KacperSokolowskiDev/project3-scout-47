"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "evaluations",
      [
        {
          CriterionId: 2,
          PlayerId: 1,
          score: 5,
          date: "2021-02-01",
        },
        {
          CriterionId: 3,
          PlayerId: 1,
          score: 5,
          date: "2021-02-02",
        },
        {
          CriterionId: 1,
          PlayerId: 2,
          score: 8,
          date: "2021-02-03",
        },
        {
          CriterionId: 2,
          PlayerId: 2,
          score: 8,
          date: "2021-03-03",
        },
        {
          CriterionId: 3,
          PlayerId: 2,
          score: 5,
          date: "2021-02-01",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("evaluations");
  },
};
