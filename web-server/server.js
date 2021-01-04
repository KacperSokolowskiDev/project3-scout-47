const express = require("express");
const app = express();
const sequelize = require("./config");
const routes = require("./routes");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api", routes);

//Error handling middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.json({ message: error.message || "An unknown error occured." });
});

app.get("/", (req, res) => {
  res.json("Welcome to Scout47!");
});

// Server Start & Database connection
sequelize
  .authenticate()
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server up and running on port: ${process.env.PORT || 5000}!`)
    )
  )
  .catch((error) => console.log("Cannot reach database: ", error));
