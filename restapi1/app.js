const express = require("express");

const app = express();

// Middlewares
// Functions that execute when routes are hit
// Kinda similiar to controller@function

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

// How to start listening/boot up the server?
app.listen(3000);
