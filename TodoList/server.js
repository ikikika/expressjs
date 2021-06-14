import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
