import express from "express";
import { createItem, getAllItems } from "../controllers/itemController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getAllItems) // get all
  .post(protect, createItem); //create new item

// router.route("/:itemId")
//             .get()
//             .put()
//             .delete();

export default router;
