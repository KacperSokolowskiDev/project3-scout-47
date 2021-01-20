"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("AgendaEvents", [
      {
        id: 1,
        label: "match",
        time: "13:23",
        date: "2021-01-01",
        description: "Match Lionel Messi ",
      },
      {
        id: 2,
        label: "training",
        time: "13:23",
        date: "2021-02-02",
        description: "Training FC BXL ",
      },
      {
        id: 3,
        label: "rendez-vous",
        time: "13:23",
        date: "2021-03-03",
        description: "RDV Parents Lucas Marc ",
      },
      {
        id: 4,
        label: "staff",
        time: "13:23",
        date: "2021-04-04",
        description: "Call staff",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("AgendaEvents", null, {});
  },
};
