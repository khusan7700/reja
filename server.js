console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const http = require("http");

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2 Session code

// 3 code
//first neet to install EJS
app.set("views", "views");
app.set("view engine", "ejs");
// ejs orqali backend da fontend(HTML)ni yasaymiz.

// 4 Ruting code
app.get("/hello", function(req, res){
    res.end(`<h1>HELLO WORLD</h1>`);
});

app.get("/gift", function(req, res){
    res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running seccessfully on port:${{PORT}}`);
});