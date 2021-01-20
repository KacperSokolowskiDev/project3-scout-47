require("dotenv").config();
console.log("HERE", process.env.PORT);
const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

//sequelize

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: "mysql",
  }
);

module.exports = sequelize;
