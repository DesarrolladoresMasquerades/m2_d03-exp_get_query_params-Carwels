const express = require("express");

const hbs = require("hbs");

require("dotenv").config();

const app = express();

//activate express, activates the body SECOND WAY
app.use(express.json())
app.use(express.urlencoded())

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static("public"));

// URL params

//FIRST WAY

// app.get("/search", (req, res) => {
//   res.render("search-form")
// })

// app.get("/search-results", (req, res) => {
//   const searchString = req.query.searchString; //gets you the form
//   const searchDate = req.query.searchDate;

//   const searchResult = ["beatles", "nirvana"].filter((el) => el.includes(searchString))

//   res.render("search-results", {searchString, searchDate, searchResult})
// })

//SECOND WAY - sister router form
app
  .route("/search")
  .get((req, res) => {
    res.render("search-form");
  })
  .post((req, res) => {
    console.log("req.body: ", req.body)

    const searchString = req.body.searchString;
    const searchDate = req.body.searchDate;

    const searchResult = ["beatles", "nirvana"].filter((el) => el.includes(searchString))

    res.render("search-results", {
      searchString,
      searchDate,
      searchResult,
    });
  });

app.listen(process.env.PORT, () =>
  console.log(`Running on port: ${process.env.PORT}`)
);
