"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Scouts",
      [
        {
          firstname: "James",
          lastname: "Junior",
          email: "J_J@gmail.com",
          telephone: 123489,
          picture: "https://source.unsplash.com/random",
        },
        {
          firstname: "Jin",
          lastname: "Kazama",
          email: "J_K@gmail.com",
          telephone: 567834,
          picture: "https://source.unsplash.com/random",
        },
        {
          firstname: "Naruto",
          lastname: "Uzumaki",
          email: "N_U@gmail.com",
          telephone: 567891234,
          picture: "https://source.unsplash.com/random",
        },
        {
          firstname: "Sasuke",
          lastname: "Uchiha",
          email: "S_U@gmail.com",
          telephone: 139987,
          picture: "https://source.unsplash.com/random",
        },
        {
          firstname: "Kakashi",
          lastname: "Hatake",
          email: "K_H@gmail.com",
          telephone: 123789,
          picture: "https://source.unsplash.com/random",
        },
        {
          firstname: "Madara",
          lastname: "Uchiha",
          email: "M_U@gmail.com",
          telephone: 156789,
          picture: "https://source.unsplash.com/random",
        },
        {
          firstname: "James",
          lastname: "Norrington",
          email: "J_N@gmail.com",
          telephone: 589464,
          picture: "https://source.unsplash.com/random",
        },
        {
          firstname: "Jack",
          lastname: "Sparrow",
          email: "J_S@gmail.com",
          telephone: 966513,
          picture: "https://source.unsplash.com/random",
        },
        {
          firstname: "Sacha",
          lastname: "Palette",
          email: "S_P@gmail.com",
          telephone: 456416,
          picture: "https://source.unsplash.com/random",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Scouts", null, {});
  },
};
