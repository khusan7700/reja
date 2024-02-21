const http = require("http");

const MongoDB = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://Usman:7I1vQ04IkY8Mqs8w@cluster0.5e72uaw.mongodb.net/Reja";

MongoDB.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running seccessfully on port: ${PORT}, http//localhost:${PORT}`
        );
      });
    }
  }
);
