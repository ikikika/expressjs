const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// Middlewares
// Functions that execute when routes are hit
// Kinda similiar to controller@function

// 1st argument must be a valid route
// 2nd argument is the function
app.use("/posts", () => {
  console.log("This is a middleware");
});

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/post", (req, res) => {
  res.send("Hello post");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

// How to start listening/boot up the server? npm run start
app.listen(3000);
