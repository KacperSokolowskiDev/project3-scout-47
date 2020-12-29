const sequelize = require("../config");
const { DataTypes } = require("sequelize");

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
    await Criteria.sync({ alter: true });
    console.log("The table criterias was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Criteria;
