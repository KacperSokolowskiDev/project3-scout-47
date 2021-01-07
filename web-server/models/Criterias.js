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
    groupe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

Client.hasMany(Criteria, { foreignKey: "client_id" });

(async () => {
  try {
    await Criteria.sync({ alter: true });
    console.log("The table criterias was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Criteria;
