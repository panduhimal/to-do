const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    taskList: {
      type: [
        {
          task: {
            type: String,
            required: false,
          },
          done: {
            type: Boolean,
            default: false,
            required: true,
          },
          priority: {
            type: String,
            default: "moderate",
            require: true,
          },
        },
      ],
      required: false,
      default: "Add task(s) for today!!!",
    },
    body: {
      type: String,
      required: false,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("TODO", todoSchema);
