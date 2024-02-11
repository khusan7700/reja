console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

//MongoDB connect
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code

// 3 Views code
//first neet to install EJS
app.set("views", "views");
app.set("view engine", "ejs");
// ejs orqali backend da fontend(HTML)ni yasaymiz.

// 4 Ruting code
// app.get("/hello", function(req, res){
//     res.end(`<h1>HELLO WORLD</h1>`);
// });

// app.get("/gift", function(req, res){
//     res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
// });

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log(req.body);
  const new_Reja = req.body.Reja;
  db.collection("plans").insertOne({ Reja: new_Reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
  // res.json({ test: "seccess" }); //res.json qaytaradi
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("someting went wrong");
      } else {
        res.render("Reja", { items: data });
      }
    });
  // res.render("Reja");
});

app.get("/portfolia", (req, res) => {
  res.render("portfolia", { user: user });
});

module.exports = app;
