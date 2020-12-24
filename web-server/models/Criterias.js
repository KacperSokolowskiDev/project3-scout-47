const sequelize = require("../config");
const { DataTypes } = require("sequelize");
const Club = require("./Clubs");

const Criteria = sequelize.define(
  "criterias",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

(async () => {
  try {
    await Club.sync({ alter: true });
    console.log("The table clubs was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Criteria;
