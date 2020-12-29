const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Client = sequelize.define(
  "clients",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //to ignore createdAt & updatedAt
    timestamps: false,
  }
);

(async () => {
  try {
    await Client.sync({ alter: true });
    console.log("The table client was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Client;
