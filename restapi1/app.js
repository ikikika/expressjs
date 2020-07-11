const express = require("express");

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

// How to start listening/boot up the server?
app.listen(3000);
