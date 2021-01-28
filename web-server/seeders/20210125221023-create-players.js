"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "players",
      [
        {
          firstname: "Lionel",
          lastname: "Messi",
          birthdate: "2005-01-01",
          position: "attaquant",
          height: 180,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Cristiano",
          lastname: "Ronaldo",
          birthdate: "2005-02-02",
          position: "defenseur",
          height: 170,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Kylian",
          lastname: "Mbappé",
          birthdate: "2004-03-03",
          position: "attaquant",
          height: 175,
          weight: 65,
          strongFoot: "gauche",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("players", null, {});
  },
};
