const express = require("express");
const port = 4000;
const app = express();
const connection = require("./config");
const routes = require("./routes");

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting " + err.stack);
  }
  console.log(
    "Connected as id " + connection.threadId + " as " + connection.config.user
  );
});

app.use(express.json());

app.use("/menu", routes);

app.get("/", (req, res) => {
  res.json("Welcome to Scout47!");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
