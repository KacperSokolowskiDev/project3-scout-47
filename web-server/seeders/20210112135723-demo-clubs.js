"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Clubs",
      [
        {
          name: "Club namurois",
          picture: "https://source.unsplash.com/random",
        },
        {
          name: "Club Bruxelles",
          picture: "https://source.unsplash.com/random",
        },
        {
          name: "Club Liegois",
          picture: "https://source.unsplash.com/random",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Clubs", null, {});
  },
};
