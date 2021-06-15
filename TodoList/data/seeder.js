import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./users.js";
import User from "../models/userModel.js";
import connectDB from "../config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    const createUsers = await User.insertMany(users);
    const adminUser = createUsers[0]._id;

    console.log("Data Imported");
    process.exit();
  } catch (e) {
    console.log(`${e}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Data Destroyed");
    process.exit();
  } catch (e) {
    console.log(`${e}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
