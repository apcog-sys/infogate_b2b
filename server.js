const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/login.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/publisher", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/client_publisher.html"));
});
app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/client_user.html"));
});
app.get("/userTabs", function (req, res) {
  //console.log(req);
  fs.readFile(
    __dirname + "/" + "config_json/user_tabs.json",
    "utf8",
    function (err, data) {
      console.log(data.Admin);
      res.end(data);
    }
  );
});

app.post("/getOneEntity", function (req, res) {
  console.log("request::", req);
});
// routers
require("./app/routes")(app);

//port

const PORT = process.env.PORT || 3000;

//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
