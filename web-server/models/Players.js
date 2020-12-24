const sequelize = require("../config");
const { DataTypes } = require("sequelize");

const Player = sequelize.define(
  "players",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    strongFoot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    //to ignore createdAt & updatedAt
    timestamps: false,
  }
);

//sync module
(async () => {
  try {
    await Player.sync({ alter: true });
    console.log("The table players was updated");
  } catch (error) {
    console.error("Unable to sync users:", error);
  }
})();
module.exports = Player;
