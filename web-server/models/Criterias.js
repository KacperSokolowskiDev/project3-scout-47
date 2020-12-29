const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Client = require("./Clients");

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
    groupe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Criteria.belongsTo(Client, { foreignKey: "client_id", targetKey: "id" });

(async () => {
  try {
    await Criteria.sync({ alter: true });
    console.log("The table criterias was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Criteria;
