const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  title: {
    type: Boolean,
    required: true,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
