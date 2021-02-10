"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        firstname: "Manu",
        lastname: "Smith",
        email: "ms@gmail.com",
        password: "password",
        telephone: 12345,
        picture: "https://i.pravatar.cc/300",
      },
      {
        firstname: "Jaques",
        lastname: "Hilton",
        email: "J_K@gmail.com",
        password: "password",
        telephone: 123,
        picture: "https://i.pravatar.cc/300",
      },
      {
        firstname: "Naruto",
        lastname: "Uzumaki",
        email: "N_U@gmail.com",
        password: "password",
        telephone: 1256,
        picture: "https://i.pravatar.cc/300",
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
