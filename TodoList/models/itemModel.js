import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completed_date: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
