const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Client = require("./Clients");

const Club = sequelize.define(
  "clubs",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

Club.belongsTo(Client, { foreignKey: "client_id", targetKey: "id" });

(async () => {
  try {
    await Club.sync({ alter: true });
    console.log("The table clubs was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Club;
