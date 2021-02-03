const express = require("express");
const app = express();
const sequelize = require("./config");
const routes = require("./routes");
const cors = require("cors");

const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroSequelize = require("@admin-bro/sequelize");

//PDF Management
const fileUpload = require("express-fileupload");

//const logo_scout47 = require("./logo_scout47");
//import logo from "./assets/logo_scout47.png";

app.use(express.static("public")); //to access the files in public folder
app.use(fileUpload());
app.use(express.json());
app.use(cors());

//file upload api
app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file not found" });
  }
  //access the file
  const myFile = req.files.file;

  //mv() method places the file inside public directory
  myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }
    //returning the response with file path and name
    return res.send({ name: myFile.name, path: `/${myFile.name}` });
  });
});

//AdminBro
AdminBro.registerAdapter(AdminBroSequelize);
const db = require("./models");
const adminBro = new AdminBro({
  databases: [db],
  rootPath: "/admin",
  branding: {
    companyName: "Scout 47",
    logo:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vdGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  BrandingOption: {},
});

const router = AdminBroExpress.buildRouter(adminBro);

app.use(adminBro.options.rootPath, router);

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
app.listen(5000, () => console.log("AdminBro is under localhost:5000/admin"));
// sequelize
//   .authenticate()
//   .then(() =>
//     app.listen(
//       process.env.PORT || 5000,
//       () =>
//         console.log(
//           `Server up and running on port: ${process.env.PORT || 5000}!`
//         ),
//       console.log("AdminBro is under localhost:8080/admin")
//     )
//   )
//   .catch((error) => console.log("Cannot reach database: ", error));
