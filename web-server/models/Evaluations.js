const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Client = require("./Clients");
const Criteria = require("./Criterias");
const Player = require("./Players");
const Scout = require("./Scouts");

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

Evaluation.belongsTo(Client, { foreignKey: "client_id", targetKey: "id" });
Evaluation.belongsTo(Criteria, { foreignKey: "criteria_id", targetKey: "id" });
Evaluation.belongsTo(Scout, { foreignKey: "scout_id", targetKey: "id" });
Evaluation.belongsTo(Player, { foreignKey: "player_id", targetKey: "id" });

(async () => {
  try {
    await Evaluation.sync({ alter: true });
    console.log("The table evaluations was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Evaluation;
