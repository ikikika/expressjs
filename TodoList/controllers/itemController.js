import asyncHandler from "express-async-handler";

import Item from "../models/itemModel.js";
import User from "../models/userModel.js";

const createItem = asyncHandler(async (req, res) => {
  const { title, description, completed } = req.body;

  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(400);
    throw new Error("Invalid user");
  } else if (title === "") {
    res.status(400);
    throw new Error("Title required");
  } else {
    const item = new Item({ user, title, description, completed });
    const createdItem = await item.save();
    res.status(200).json(createdItem);
  }
});

const getAllItems = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  const items = await Item.find({ user });
  res.status(200).json(items);
});

export { createItem, getAllItems };
