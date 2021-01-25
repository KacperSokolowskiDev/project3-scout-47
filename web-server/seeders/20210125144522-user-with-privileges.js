"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstname: "Manu",
        lastname: "Manu",
        email: "MM@gmail.com",
        password: "password",
      },
      {
        firstname: "Jin",
        lastname: "Kazama",
        email: "J_K@gmail.com",
        password: "password",
      },
      {
        firstname: "Naruto",
        lastname: "Uzumaki",
        email: "N_U@gmail.com",
        password: "password",
      },
    ]);
    await queryInterface.bulkInsert(
      "privileges",
      [
        {
          role: "root",
          ageGrade: JSON.stringify(["*"]),
          UserId: 1,
        },
        {
          role: "manager",
          ageGrade: JSON.stringify(["*"]),
          UserId: 2,
        },
        {
          role: "scout",
          ageGrade: JSON.stringify([2002, 2004, 2005]),
          UserId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
