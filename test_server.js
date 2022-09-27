const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5500",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return "hello";
});

app.post("/get", function (req, res) {
  return "hello world";
});
// routers

//port

const PORT = process.env.PORT || 5500;

//server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
