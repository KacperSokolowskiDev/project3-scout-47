"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Players",
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
          birthdate: "2005-03-03",
          position: "attaquant",
          height: 175,
          weight: 65,
          strongFoot: "gauche",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Dries",
          lastname: "Mertens",
          birthdate: "2005-04-04",
          position: "attaquant",
          height: 182,
          weight: 75,
          strongFoot: "gauche",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Antoine",
          lastname: "Griezmann",
          birthdate: "2004-01-01",
          position: "attaquant",
          height: 165,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Eden",
          lastname: "Hazard",
          birthdate: "2004-02-02",
          position: "attaquant",
          height: 165,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Romelu",
          lastname: "Lukaku",
          birthdate: "2004-03-03",
          position: "attaquant",
          height: 165,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Fransceco",
          lastname: "Buffone",
          birthdate: "2004-04-04",
          position: "attaquant",
          height: 165,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Kevin",
          lastname: "De Bryune",
          birthdate: "2006-01-01",
          position: "attaquant",
          height: 165,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Thibaut",
          lastname: "Courtois",
          birthdate: "2007-01-01",
          position: "attaquant",
          height: 165,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
        {
          firstname: "Mousa",
          lastname: "Dembélé",
          birthdate: "2007-02-02",
          position: "attaquant",
          height: 165,
          weight: 70,
          strongFoot: "droit",
          picture:
            "https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Players", null, {});
  },
};
