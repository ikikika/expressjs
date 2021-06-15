import asyncHandler from "express-async-handler";

import Item from "../models/itemModel.js";
import User from "../models/userModel.js";

const createItem = asyncHandler(async (req, res) => {
  const { title, description, completed } = req.body;

  const user = await User.findById(req.user._id);

  if (title === "") {
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

const getItemById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  const item = await Item.findOne({ user, _id: req.params.itemId });
  //   const item = await Item.findById(req.params.itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404);
    throw new Error("Item invalid");
  }
});

const editItem = asyncHandler(async (req, res) => {
  const { title, description, completed } = req.body;

  const user = await User.findById(req.user._id);
  const item = await Item.findOne({ user, _id: req.params.itemId });

  if (title === "") {
    res.status(400);
    throw new Error("Title required");
  } else if (!item) {
    res.status(400);
    throw new Error("Item invalid");
  } else {
    item.title = title;
    item.description = description;
    item.completed = completed;

    const updatedItem = await item.save();

    res.status(200).json(updatedItem);
  }
});

const deleteItem = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const item = await Item.findOne({ user, _id: req.params.itemId });

  if (!item) {
    res.status(400);
    throw new Error("Item invalid");
  } else {
    await item.remove();

    res.status(200).json("Item removed");
  }
});

const completeItem = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const item = await Item.findOne({ user, _id: req.params.itemId });

  if (!item) {
    res.status(400);
    throw new Error("Item invalid");
  } else {
    const completed = !item.completed;
    const completedDate = completed ? Date.now() : null;

    item.completed = completed;
    item.completed_date = completedDate;
    const updatedItem = await item.save();

    res.status(200).json(updatedItem);
  }
});

export {
  createItem,
  getAllItems,
  getItemById,
  editItem,
  deleteItem,
  completeItem,
};
