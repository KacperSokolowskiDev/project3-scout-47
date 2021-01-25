"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "AgendaEvents",
      [
        {
          user_id: 3,
          description: "Match Lionel Messi ",
          label: "match",
          startDate: "2021-01-01 13:00",
          endDate: "2021-01-01 13:00",
        },
        {
          user_id: 6,
          description: "Match Dries Mertens ",
          label: "match",
          startDate: "2021-01-01 13:00",
          endDate: "2021-01-01 13:00",
        },
        {
          user_id: 9,
          description: "Match Kevin de Bryune ",
          label: "match",
          startDate: "2021-01-01 13:00",
          endDate: "2021-01-01 13:00",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AgendaEvents", null, {});
  },
};
