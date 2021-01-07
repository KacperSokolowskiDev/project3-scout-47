const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Client = require("./Clients");
const Criteria = require("./Criterias");
const Scout = require("./Scouts");
const Player = require("./Players");

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

Client.hasMany(Evaluation, { foreignKey: "client_id" });
Scout.hasMany(Evaluation, { foreignKey: "scout_id" });
Player.hasMany(Evaluation, { foreignKey: "player_id" });
Criteria.hasMany(Evaluation, { foreignKey: "criteria_id" });

//sync module
(async () => {
  try {
    await Evaluation.sync({ alter: true });
    console.log("The table evaluations was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Evaluation;
