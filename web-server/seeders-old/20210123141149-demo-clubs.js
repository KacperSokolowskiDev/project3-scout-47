"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Clubs",
      [
        {
          name: "FC Brussels",
          address: "rue de Brussels",
          email: "FCBXL@gmail.com",
          telephone: 112233,
        },
        {
          name: "Inter Namur",
          address: "rue de Namur",
          email: "IN@gmail.com",
          telephone: 445566,
        },
        {
          name: "AC Antwerpen ",
          address: "rue de Antwerpen",
          email: "FCAnt@gmail.com",
          telephone: 778899,
        },
        {
          name: "Inter molen",
          address: "rue du Durum",
          email: "Molen@gmail.com",
          telephone: 778899,
        },
        {
          name: "FC Uccle",
          address: "rue de l'or",
          email: "Uccle@gmail.com",
          telephone: 778899,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Clubs", null, {});
  },
};
