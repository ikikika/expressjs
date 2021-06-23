const express = require("express");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todo.routes");

const connectDB = require("./config/db");

const app = express();
dotenv.config();

connectDB();

app.use(express.json);

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

// app.listen(3000, () => {
//   console.log("server is running");
// });

module.exports = app;
