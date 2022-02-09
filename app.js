const express = require("express");

const hbs = require("hbs");

require("dotenv").config();

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

// URL params

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
