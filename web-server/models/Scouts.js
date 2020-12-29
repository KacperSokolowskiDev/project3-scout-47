const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Scout = sequelize.define(
  "scouts",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    //to ignore createdat & updatedat
    timestamps: false,
  }
);

(async () => {
  try {
    await Scout.sync({ alter: true });
    console.log("The table clients was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();

module.exports = Scout;
