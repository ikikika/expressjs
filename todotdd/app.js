const express = require("express");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todo.routes");

const mongodb = require("./config/mongodb.connect");

const app = express();
dotenv.config();

mongodb.connect();

app.use(express.json);

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.listen(3000, () => {
//   console.log("server is running");
// });

module.exports = app;
