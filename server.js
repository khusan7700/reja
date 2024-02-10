console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

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

// app.post("/create-item", (req, res) => {
//     console.log(req.body);
//     res.json({test: "seccess"}); //res.json qaytaradi
// });

app.get("/", function (req, res) {
  res.render("reja");
});

app.get("/portfolia", (req, res) => {
  res.render("portfolia", { user: user });
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running seccessfully on port: ${PORT}, http//localhost:${PORT}`
  );
});
