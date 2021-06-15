import express from "express";
import {
  createItem,
  getAllItems,
  getItemById,
  editItem,
  deleteItem,
  completeItem,
} from "../controllers/itemController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getAllItems) // get all
  .post(protect, createItem); //create new item

router
  .route("/:itemId")
  .get(protect, getItemById)
  .put(protect, editItem)
  .delete(protect, deleteItem);

router.route("/:itemId/complete").put(protect, completeItem);

export default router;
