import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import db from "./models";
require("dotenv").config();

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoutes(app);

connectDB();
db.sequelize.sync().then((req) => {
  app.listen(port, () => {
    console.log("Running on port: " + port);
  });
});
