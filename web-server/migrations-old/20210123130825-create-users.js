"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      yearCategory: {
        type: Sequelize.ENUM,
        values: ["2008", "2009", "2010"],
        defaultValue: "2008",
      },
      telephone: {
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATEONLY,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATEONLY,
      },
      role_id: {
        type: Sequelize.DataTypes.INTEGER,
        reference: { models: { tableName: "Roles" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      formation_center_id: {
        type: Sequelize.DataTypes.INTEGER,
        reference: { models: { tableName: "FormationCenters" }, key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
