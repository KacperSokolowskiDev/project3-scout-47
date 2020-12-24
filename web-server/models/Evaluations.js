const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Evaluation = sequelize.define(
  "evaluations",
  {
    evaluationDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

(async () => {
  try {
    await Evaluation.sync({ alter: true });
    console.log("The table evaluations was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Evaluation;
