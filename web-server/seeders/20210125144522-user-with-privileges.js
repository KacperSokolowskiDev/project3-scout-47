"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        firstname: "Manu",
        lastname: "Manu",
        email: "MM@gmail.com",
        password: "password",
        telephone: 12345,
      },
      {
        firstname: "Jin",
        lastname: "Kazama",
        email: "J_K@gmail.com",
        password: "password",
        telephone: 123,
      },
      {
        firstname: "Naruto",
        lastname: "Uzumaki",
        email: "N_U@gmail.com",
        password: "password",
        telephone: 1256,
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
